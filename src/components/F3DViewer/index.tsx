import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import f3d, { type LogVerboseLevel, InteractorState } from "f3d";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";

type notificationFn = (
  desc: string,
  value: string,
  bindStr: string,
  duration: number,
) => boolean;
type logFn = (
  message: string,
  level: "error" | "warning" | "info" | "debug",
) => void;

function initViewer(
  moduleRef: any,
  fileUrl: string,
  addLog: logFn,
  addNotification: notificationFn,
  setIsLoading: (isLoading: boolean) => void,
  onSceneLoaded?: () => void,
  onAnimationTimeChanged?: (time: number) => void,
) {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  canvas.oncontextmenu = function (e) {
    e.preventDefault();
    e.stopPropagation();
  };

  f3d({ canvas: canvas })
    .then(async (Module) => {
      moduleRef.current = Module;

      // write in the filesystem
      const defaultFile = await fetch(fileUrl).then((b) => b.arrayBuffer());

      Module.Log.setVerboseLevel(Module.LogVerboseLevel.QUIET, false);
      Module.Log.forward((level: LogVerboseLevel, message: string) => {
        if (level === Module.LogVerboseLevel.ERROR) addLog(message, "error");
        else if (level === Module.LogVerboseLevel.WARN)
          addLog(message, "warning");
        else if (level === Module.LogVerboseLevel.INFO) addLog(message, "info");
        else addLog(message, "debug");
      });

      // automatically load all supported file format readers
      Module.Engine.autoloadPlugins();

      moduleRef.current.engineInstance = Module.Engine.create();

      // background must be set to black for proper blending with transparent canvas
      moduleRef.current.engineInstance
        .getOptions()
        .setAsString("render.background.color", "#000000");

      moduleRef.current.engineInstance
        .getOptions()
        .setAsString("ui.loader_progress", "true");
      moduleRef.current.engineInstance
        .getOptions()
        .setAsString("scene.animation.autoplay", "true");

      // setup coloring
      moduleRef.current.engineInstance
        .getOptions()
        .toggle("model.scivis.enable");
      moduleRef.current.engineInstance
        .getOptions()
        .setAsString("model.scivis.array_name", "Colors");
      moduleRef.current.engineInstance
        .getOptions()
        .setAsString("model.scivis.component", "-2");
      moduleRef.current.engineInstance
        .getOptions()
        .toggle("model.scivis.cells");

      // make it look nice
      moduleRef.current.engineInstance
        .getOptions()
        .setAsString("render.effect.antialiasing.mode", "fxaa");
      moduleRef.current.engineInstance
        .getOptions()
        .toggle("render.effect.tone_mapping");
      // Workaround: SSAO, grid and reflection are disabled on mobile by default.
      // SSAO is memory-bandwidth heavy and causes thermal throttling on mobile GPUs.
      // Grid + reflection cause depth artifacts (jagged edges) when SSAO is off on mobile.
      // Users can still enable them manually via the settings panel.
      if (!window.matchMedia("(max-width: 768px)").matches) {
        moduleRef.current.engineInstance
          .getOptions()
          .toggle("render.effect.ambient_occlusion");
        moduleRef.current.engineInstance
          .getOptions()
          .toggle("render.grid.enable");
        moduleRef.current.engineInstance
          .getOptions()
          .setAsString("render.grid.reflection", "0.5");
      }
      moduleRef.current.engineInstance
        .getOptions()
        .toggle("render.hdri.ambient");

      // display widgets
      moduleRef.current.engineInstance.getOptions().toggle("ui.axis");

      // default to +Z
      moduleRef.current.engineInstance
        .getOptions()
        .setAsString("scene.up_direction", "+Z");

      // setup the window size based on the canvas size
      const scale = window.devicePixelRatio;
      moduleRef.current.engineInstance
        .getWindow()
        .setSize(
          scale * moduleRef.current.canvas.clientWidth,
          scale * moduleRef.current.canvas.clientHeight,
        );

      moduleRef.current.engineInstance
        .getInteractor()
        .setNotificationCallback(addNotification);

      // load file
      openStream(moduleRef, new Uint8Array(defaultFile), onSceneLoaded);

      moduleRef.current.engineInstance
        .getInteractor()
        .setEventLoopUserCallback((state: InteractorState) => {
          onAnimationTimeChanged?.(state.animationTime);
        });

      // Default binding maps "Space" but wasm key is " " (space character)
      // so we need to add a new binding for it
      // https://gitlab.kitware.com/vtk/vtk/-/work_items/20161
      const bind = new Module.InteractionBind();
      bind.mod = Module.InteractionBindModifierKeys.NONE;
      bind.inter = " ";
      moduleRef.current.engineInstance
        .getInteractor()
        .addBinding(bind, ["toggle_animation"]);

      moduleRef.current.engineInstance.getInteractor().start();

      moduleRef.current.canvas.focus(); // focus by default

      // Hide loading screen
      setIsLoading(false);
    })
    .catch((error) => {
      // if the exception is a webassembly exception
      if (error instanceof WebAssembly.RuntimeError) {
        console.error(
          "Internal exception: " + moduleRef.current.getExceptionMessage(error),
        );
      } else {
        console.error("Error: " + error.message);
      }
      setIsLoading(false);
    });
}

function openStream(
  moduleRef: any,
  stream: Uint8Array,
  onSceneLoaded?: () => void,
) {
  const scene = moduleRef.current.engineInstance.getScene();

  scene.clear();

  moduleRef.current.engineInstance
    .getOptions()
    .reset("scene.animation.indices");

  let result: { success: boolean; error?: string } = { success: true };
  try {
    scene.addBuffer(stream);
  } catch (e) {
    let [, errorMsg] = moduleRef.current.getExceptionMessage(e);
    result = { success: false, error: errorMsg };
  }

  moduleRef.current.engineInstance.getWindow().getCamera().resetToBounds(0.9);
  moduleRef.current.engineInstance.getWindow().render();
  moduleRef.current.currentStream = stream;
  onSceneLoaded?.();
  return result;
}

interface F3DViewerProps {
  fileUrl: string;
}

const F3DViewer = forwardRef<any, F3DViewerProps>(({ fileUrl }, ref) => {
  const moduleRef = useRef<any>(null);
  const [logs, setLogs] = useState<
    Array<{
      type: "debug" | "info" | "warning" | "error" | "command";
      message: string;
    }>
  >([]);
  const [isLogWindowOpen, setIsLogWindowOpen] = useState(false);
  const [commandInput, setCommandInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const logEndRef = useRef<HTMLDivElement>(null);
  const commandInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [severityFilters, setSeverityFilters] = useState({
    error: true,
    warning: true,
    info: true,
    debug: false,
  });

  type AnimationInfo = {
    names: string[];
    start: number;
    end: number;
  };

  const [animations, setAnimations] = useState<AnimationInfo>({
    start: 0,
    end: 1,
    names: [],
  });
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeAnimationIndex, setActiveAnimationIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isAnimDragging, setIsAnimDragging] = useState(false);
  const handleAnimationTimeChanged = (time: number) => {
    setCurrentTime(time);
  };

  const hasAnimations = animations.names.length > 0;
  const animationDuration = hasAnimations
    ? Math.max(1, animations.end - animations.start)
    : 1;
  const progressPercent = hasAnimations
    ? Math.min(
        100,
        Math.max(
          0,
          ((currentTime - animations.start) / animationDuration) * 100,
        ),
      )
    : 0;

  const formatTime = (value: number) => {
    const minutes = Math.floor(value / 60);
    const secondsValue = value - minutes * 60;
    const wholeSeconds = Math.floor(secondsValue);
    const hundredths = Math.floor((secondsValue - wholeSeconds) * 100);
    const seconds = wholeSeconds.toString().padStart(2, "0");
    const hundredthsString = hundredths.toString().padStart(2, "0");
    return `${minutes}:${seconds}.${hundredthsString}`;
  };

  const updateAnimationTime = (clientX: number) => {
    if (!hasAnimations || !progressBarRef.current) {
      return;
    }

    const rect = progressBarRef.current.getBoundingClientRect();
    const ratio = Math.min(
      1,
      Math.max(0, (clientX - rect.left) / Math.max(rect.width, 1)),
    );
    const duration = animations.end - animations.start;
    const nextTime = Math.min(
      animations.end,
      Math.max(animations.start, animations.start + ratio * duration),
    );

    setCurrentTime(nextTime);
    moduleRef.current.engineInstance.getScene().loadAnimationTime(nextTime);
    moduleRef.current.engineInstance.getWindow().render();
  };

  const refreshAnimationState = () => {
    const scene = moduleRef.current.engineInstance.getScene();

    const names = scene.getAnimationNames();
    const timeRange = scene.animationTimeRange();
    const start = timeRange[0];
    const end = timeRange[1];

    setAnimations({ names, start, end });
    setActiveAnimationIndex(0);
    setCurrentTime(start);
  };

  const applyAnimationSpeed = (value: number) => {
    setPlaybackSpeed(value);
    moduleRef.current.engineInstance
      .getOptions()
      .setAsString("scene.animation.speed_factor", value.toString());
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);

    if (isPlaying) {
      moduleRef.current.engineInstance.getInteractor().stopAnimation();
    } else {
      moduleRef.current.engineInstance.getInteractor().startAnimation();
    }
  };

  const selectAnimation = (direction: -1 | 1) => {
    if (!hasAnimations) {
      return;
    }

    const nextIndex =
      (activeAnimationIndex + direction + animations.names.length) %
      animations.names.length;

    setActiveAnimationIndex(nextIndex);
    setCurrentTime(animations.start);
    moduleRef.current.engineInstance
      .getScene()
      .loadAnimationTime(animations.start);
    moduleRef.current.engineInstance
      .getOptions()
      .setAsString("scene.animation.indices", nextIndex.toString());
    moduleRef.current.engineInstance.getWindow().render();
  };

  const handlePreviousAnimation = () => {
    selectAnimation(-1);
  };

  const handleNextAnimation = () => {
    selectAnimation(1);
  };

  const [notifications, setNotifications] = useState<
    Array<{
      startTime: number;
      desc: string;
      value: string;
      bindStr: string;
      duration: number;
      fading: boolean;
    }>
  >([]);

  // Add log entry
  const addLog = (
    message: string,
    type: "debug" | "info" | "warning" | "error" | "command",
  ) => {
    setLogs((prev) => [...prev, { type, message }]);
  };

  // Toggle severity filter
  const toggleSeverityFilter = (
    severity: "debug" | "info" | "warning" | "error",
  ) => {
    setSeverityFilters((prev) => ({
      ...prev,
      [severity]: !prev[severity],
    }));
  };

  // Filter logs based on severity
  const filteredLogs = logs.filter(
    (log) => log.type === "command" || severityFilters[log.type],
  );

  // Auto-scroll to bottom when new logs are added
  React.useEffect(() => {
    if (logEndRef.current) {
      const logContent = logEndRef.current.parentElement;
      if (logContent) {
        logContent.scrollTop = logContent.scrollHeight;
      }
    }
  }, [logs]);

  // When the log window opens, focus the command input so the user can type immediately
  useEffect(() => {
    if (isLogWindowOpen) {
      commandInputRef.current?.focus();
      if (commandInput === "") {
        setSuggestions(commandHistory);
        setSelectedSuggestionIndex(commandHistory.length > 0 ? 0 : -1);
      }
    }
  }, [isLogWindowOpen]);

  useEffect(() => {
    if (!isAnimDragging) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      updateAnimationTime(event.clientX);
    };

    const handlePointerUp = () => {
      setIsAnimDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [animationDuration, isAnimDragging]);

  // Scroll selected suggestion into view when navigating
  useEffect(() => {
    if (suggestionsRef.current && selectedSuggestionIndex >= 0) {
      const item = suggestionsRef.current.children[
        selectedSuggestionIndex
      ] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedSuggestionIndex]);

  const acceptSuggestion = (suggestion: string) => {
    setCommandInput(suggestion);
    setSuggestions([]);
    setSelectedSuggestionIndex(-1);
    commandInputRef.current?.focus();
  };

  // Handle command submission
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!commandInput.trim()) return;

    addLog(`> ${commandInput}`, "command");

    let newHistory = commandHistory;

    // Add to history if not already present
    if (!commandHistory.includes(commandInput)) {
      newHistory = [commandInput, ...commandHistory];
      setCommandHistory(newHistory);
    }

    // Execute commands
    try {
      if (moduleRef.current) {
        moduleRef.current.engineInstance
          .getInteractor()
          .triggerCommand(commandInput, true);
        moduleRef.current.engineInstance.getWindow().render();
      }
    } catch (error: any) {
      addLog(`Error: ${error.message}`, "error");
    }

    setCommandInput("");
    setSuggestions(newHistory);
    setSelectedSuggestionIndex(0);
  };

  useImperativeHandle(ref, () => ({
    loadFile: (buffer: Uint8Array) => {
      return openStream(moduleRef, buffer, refreshAnimationState);
    },
    setUpDirection: (direction: "+Y" | "+Z") => {
      if (!moduleRef.current) return;
      // Set up direction in the engine options
      moduleRef.current.engineInstance
        .getOptions()
        .setAsString("scene.up_direction", direction);
    },
    triggerCommand: (command: string) => {
      if (!moduleRef.current) return;
      moduleRef.current.engineInstance
        .getInteractor()
        .triggerCommand(command, true);
      moduleRef.current.engineInstance.getWindow().render();
    },
    addLog: addLog,
  }));

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    // Focus the canvas when the user clicks it so keyboard events are forwarded
    const handleMouseDown = () => canvas.focus();
    canvas.addEventListener("mousedown", handleMouseDown);

    // Open the log window when escape is pressed
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLogWindowOpen(true);
      }
    };
    canvas.addEventListener("keydown", handleKeyDown);

    const addNotification: notificationFn = (
      desc,
      value,
      bindStr,
      duration,
    ) => {
      const startTime = Date.now();
      const notif = {
        startTime,
        desc,
        value,
        bindStr,
        duration,
        fading: false,
      };

      // add new notification to the top of the list
      setNotifications((prev) => [notif, ...prev]);

      // should match the transition duration in styles.module.css
      const fadeDuration = 600;

      // start fade after duration seconds
      setTimeout(() => {
        setNotifications((prev) =>
          prev.map((n) =>
            n.startTime === startTime ? { ...n, fading: true } : n,
          ),
        );
      }, duration * 1000);

      // remove after duration + fade
      setTimeout(
        () => {
          setNotifications((prev) =>
            prev.filter((n) => n.startTime !== startTime),
          );
        },
        duration * 1000 + fadeDuration,
      );

      return false;
    };

    initViewer(
      moduleRef,
      fileUrl,
      addLog,
      addNotification,
      setIsLoading,
      refreshAnimationState,
      handleAnimationTimeChanged,
    );

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("keydown", handleKeyDown);
      if (moduleRef.current?.engineInstance) {
        moduleRef.current.engineInstance.getInteractor().requestStop();
        moduleRef.current.engineInstance[Symbol.dispose]();
        moduleRef.current.engineInstance = null;
      }
    };
  }, [fileUrl]);

  return (
    <div className={styles.viewer}>
      <canvas id="canvas" tabIndex={0}></canvas>

      {hasAnimations && (
        <div className={styles.animationControls}>
          <div className={styles.animationMeta}>
            <div className={styles.animationInfo}>
              <strong>
                {animations.names[activeAnimationIndex] ?? "No animations"}
              </strong>
            </div>
            <div className={styles.timeDisplay}>
              <span>{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(animationDuration)}</span>
            </div>
          </div>

          <div className={styles.progressRow}>
            <div
              ref={progressBarRef}
              className={styles.progressBar}
              onPointerDown={(event) => {
                event.preventDefault();
                setIsAnimDragging(true);
                setIsPlaying(false);
                moduleRef.current?.engineInstance
                  ?.getInteractor()
                  ?.stopAnimation?.();
                updateAnimationTime(event.clientX);
              }}
              onClick={(event) => {
                if (!isAnimDragging) {
                  updateAnimationTime(event.clientX);
                }
              }}
              role="slider"
              aria-valuemin={animations.start ?? 0}
              aria-valuemax={animations.end ?? 0}
              aria-valuenow={currentTime}
              tabIndex={0}
            >
              <div
                className={styles.progressFill}
                style={{ width: `${progressPercent}%` }}
              />
              <div
                className={styles.progressHandle}
                style={{ left: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className={styles.controlsRow}>
            <div className={styles.controlGroup}>
              {animations.names.length > 1 && (
                <button
                  className={styles.controlButton}
                  onClick={handlePreviousAnimation}
                  aria-label="Previous animation"
                  title="Previous animation"
                >
                  <Icon icon="material-symbols:skip-previous-rounded" />
                </button>
              )}
              <button
                className={styles.controlButton}
                onClick={handlePlayPause}
                aria-label={isPlaying ? "Pause animation" : "Play animation"}
                title={isPlaying ? "Pause animation" : "Play animation"}
              >
                <Icon
                  icon={
                    isPlaying
                      ? "material-symbols:pause-rounded"
                      : "material-symbols:play-arrow-rounded"
                  }
                />
              </button>
              {animations.names.length > 1 && (
                <button
                  className={styles.controlButton}
                  onClick={handleNextAnimation}
                  aria-label="Next animation"
                  title="Next animation"
                >
                  <Icon icon="material-symbols:skip-next-rounded" />
                </button>
              )}
            </div>

            <label className={styles.speedControl}>
              <select
                value={playbackSpeed}
                onChange={(e) => {
                  applyAnimationSpeed(Number(e.target.value));
                }}
              >
                <option value="0.25">0.25{String.fromCharCode(0x00d7)}</option>
                <option value="0.5">0.5{String.fromCharCode(0x00d7)}</option>
                <option value="1">1{String.fromCharCode(0x00d7)}</option>
                <option value="1.5">1.5{String.fromCharCode(0x00d7)}</option>
                <option value="2">2{String.fromCharCode(0x00d7)}</option>
              </select>
            </label>
          </div>
        </div>
      )}

      <div className={styles.notifications}>
        {notifications.map((n) => (
          <div
            key={n.startTime}
            className={`${styles.notification} ${n.fading ? styles.fading : ""}`}
          >
            <div className={styles.notificationText}>
              <span className={styles.notificationDesc}>{n.desc}</span>
              <span className={styles.notificationValue}>{n.value}</span>
            </div>
          </div>
        ))}
      </div>

      {isLoading && (
        <div className={styles.loadingScreen}>
          <div className={styles.loadingSpinner}></div>
          <div className={styles.loadingText}>Loading 3D Viewer...</div>
          <div className={styles.loadingSubtext}>
            This may take a few seconds
          </div>
        </div>
      )}

      {!isLoading && !isLogWindowOpen && (
        <button
          className={styles.logToggle}
          onClick={() => setIsLogWindowOpen(true)}
          aria-label="Toggle log window"
          title="Console"
        >
          <Icon icon="material-symbols:terminal" />
        </button>
      )}

      {isLogWindowOpen && (
        <div className={styles.logWindow}>
          <div className={styles.logHeader}>
            <span>Console</span>
            <div className={styles.severityFilters}>
              <button
                className={`${styles.filterButton} ${styles.filterError} ${severityFilters.error ? styles.active : ""}`}
                onClick={() => toggleSeverityFilter("error")}
                title="Toggle errors"
              >
                Error
              </button>
              <button
                className={`${styles.filterButton} ${styles.filterWarning} ${severityFilters.warning ? styles.active : ""}`}
                onClick={() => toggleSeverityFilter("warning")}
                title="Toggle warnings"
              >
                Warning
              </button>
              <button
                className={`${styles.filterButton} ${styles.filterInfo} ${severityFilters.info ? styles.active : ""}`}
                onClick={() => toggleSeverityFilter("info")}
                title="Toggle info"
              >
                Info
              </button>
              <button
                className={`${styles.filterButton} ${styles.filterDebug} ${severityFilters.debug ? styles.active : ""}`}
                onClick={() => toggleSeverityFilter("debug")}
                title="Toggle debug"
              >
                Debug
              </button>
            </div>
            <button
              className={styles.logClose}
              onClick={() => setIsLogWindowOpen(false)}
              aria-label="Close log window"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div className={styles.logContent}>
            {filteredLogs.map((log, idx) => (
              <div
                key={idx}
                className={`${styles.logEntry} ${styles[`log-${log.type}`]}`}
              >
                {log.message.split("\n").map((line, lineIdx) => (
                  <React.Fragment key={lineIdx}>
                    {line}
                    {lineIdx < log.message.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            ))}
            <div ref={logEndRef} />
          </div>
          <div className={styles.logInputWrapper}>
            {/* Autocomplete suggestions if not empty */}
            {suggestions.length > 0 && (
              <ul ref={suggestionsRef} className={styles.suggestions}>
                {suggestions.map((str, index) => (
                  <li
                    key={index}
                    className={`${styles.suggestionItem} ${index === selectedSuggestionIndex ? styles.suggestionItemSelected : ""}`}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      acceptSuggestion(str);
                    }}
                  >
                    {str}
                  </li>
                ))}
              </ul>
            )}
            <form className={styles.logInput} onSubmit={handleCommandSubmit}>
              <input
                ref={commandInputRef}
                type="text"
                placeholder="Enter command..."
                value={commandInput}
                onChange={(e) => {
                  const value = e.target.value;
                  setCommandInput(value);
                  // if empty, show history, else existing commands
                  if (value === "") {
                    setSuggestions(commandHistory);
                    setSelectedSuggestionIndex(
                      commandHistory.length > 0 ? 0 : -1,
                    );
                  } else {
                    setSuggestions(
                      moduleRef.current.engineInstance
                        .getInteractor()
                        .getCommandActions()
                        .filter((cmd: string) => cmd.startsWith(value)),
                    );
                    setSelectedSuggestionIndex(0);
                  }
                }}
                onKeyDown={(e) => {
                  if (suggestions.length > 0) {
                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setSelectedSuggestionIndex((prev) =>
                        Math.max(0, prev - 1),
                      );
                      return;
                    } else if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setSelectedSuggestionIndex((prev) =>
                        Math.min(suggestions.length - 1, prev + 1),
                      );
                      return;
                    } else if (e.key === "Tab" || e.key === "Enter") {
                      e.preventDefault();
                      acceptSuggestion(suggestions[selectedSuggestionIndex]);
                      return;
                    } else if (e.key === "Escape") {
                      e.stopPropagation();
                      e.preventDefault();
                      setSuggestions([]);
                      setSelectedSuggestionIndex(0);
                      return;
                    }
                  }
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleCommandSubmit(e);
                  } else if (e.key === "Escape") {
                    e.stopPropagation();
                    e.preventDefault();
                    if (commandInput !== "") {
                      setCommandInput("");
                    } else {
                      setIsLogWindowOpen(false);
                      const c = document.getElementById(
                        "canvas",
                      ) as HTMLCanvasElement;
                      if (c) c.focus();
                    }
                  }
                }}
                className={styles.commandInput}
              />
              <button type="submit" className={styles.commandSubmit}>
                <Icon icon="material-symbols:send" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
});

export default F3DViewer;
