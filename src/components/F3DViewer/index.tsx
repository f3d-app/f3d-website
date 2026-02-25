import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import f3d, { type LogVerboseLevel } from "f3d";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";

function initViewer(moduleRef, fileUrl, addLog, setIsLoading) {
  const canvas = document.getElementById("canvas");
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
      Module.Log.forward((level, message) => {
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
        .setAsString("ui.animation_progress", "true");
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
        .toggle("render.effect.antialiasing.enable");
      moduleRef.current.engineInstance
        .getOptions()
        .toggle("render.effect.tone_mapping");
      moduleRef.current.engineInstance
        .getOptions()
        .toggle("render.effect.ambient_occlusion");
      moduleRef.current.engineInstance
        .getOptions()
        .toggle("render.hdri.ambient");

      // display widgets
      moduleRef.current.engineInstance.getOptions().toggle("ui.axis");
      moduleRef.current.engineInstance
        .getOptions()
        .toggle("render.grid.enable");

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

      // load file
      openStream(moduleRef, new Uint8Array(defaultFile));

      moduleRef.current.engineInstance.getInteractor().start();

      // Hide loading screen
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Internal exception: " + error);
      setIsLoading(false);
    });
}

function openStream(moduleRef, stream: Uint8Array) {
  const scene = moduleRef.current.engineInstance.getScene();

  scene.clear();

  try {
    scene.addBuffer(stream);
  } catch (e) {
    console.error("Failed to load stream: " + e);
  }

  moduleRef.current.engineInstance.getWindow().getCamera().resetToBounds(0.9);
  moduleRef.current.engineInstance.getWindow().render();
  moduleRef.current.currentStream = stream;
}

interface F3DViewerProps {
  fileUrl: string;
}

const F3DViewer = forwardRef<any, F3DViewerProps>(({ fileUrl }, ref) => {
  const moduleRef = useRef(null);
  const [logs, setLogs] = useState<
    Array<{
      type: "debug" | "info" | "warning" | "error" | "command";
      message: string;
    }>
  >([]);
  const [isLogWindowOpen, setIsLogWindowOpen] = useState(false);
  const [commandInput, setCommandInput] = useState("");
  const logEndRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [severityFilters, setSeverityFilters] = useState({
    error: true,
    warning: true,
    info: true,
    debug: false,
  });

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

  // Handle command submission
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!commandInput.trim()) return;

    addLog(`> ${commandInput}`, "command");

    // Execute commands
    try {
      if (moduleRef.current) {
        moduleRef.current.engineInstance
          .getInteractor()
          .triggerCommand(commandInput);
        moduleRef.current.engineInstance.getWindow().render();
      }
    } catch (error) {
      addLog(`Error: ${error.message}`, "error");
    }

    setCommandInput("");
  };

  useImperativeHandle(ref, () => ({
    loadFile: (buffer: Uint8Array) => {
      openStream(moduleRef, buffer);
    },
    setUpDirection: (direction) => {
      if (!moduleRef.current) return;
      // Set up direction in the engine options
      moduleRef.current.engineInstance
        .getOptions()
        .setAsString("scene.up_direction", direction);
      openStream(moduleRef, moduleRef.current.currentStream);
    },
    triggerCommand: (command: string) => {
      if (!moduleRef.current) return;
      moduleRef.current.engineInstance.getInteractor().triggerCommand(command);
      moduleRef.current.engineInstance.getWindow().render();
    },
    addLog: addLog,
  }));

  useEffect(() => {
    initViewer(moduleRef, fileUrl, addLog, setIsLoading);
  }, [fileUrl]);

  return (
    <div className={styles.viewer}>
      <canvas id="canvas"></canvas>

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
          onClick={() => setIsLogWindowOpen(!isLogWindowOpen)}
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
          <form className={styles.logInput} onSubmit={handleCommandSubmit}>
            <input
              type="text"
              placeholder="Enter command..."
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleCommandSubmit(e);
                }
              }}
              className={styles.commandInput}
            />
            <button type="submit" className={styles.commandSubmit}>
              <Icon icon="material-symbols:send" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
});

export default F3DViewer;
