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

function initViewer(moduleRef, fileUrl, addLog) {
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

      const modelName = fileUrl.split("/").pop();

      Module.FS.writeFile(modelName, new Uint8Array(defaultFile));

      Module.Log.setVerboseLevel(Module.LogVerboseLevel.QUIET, false);
      Module.Log.forward((level, message) => {
        if (level === Module.LogVerboseLevel.ERROR)
          addLog(message, 'error');
        else if (level === Module.LogVerboseLevel.WARN)
          addLog(message, 'warning');
        else if (level === Module.LogVerboseLevel.INFO)
          addLog(message, 'info');
        else
          addLog(message, 'debug');
      });

      // automatically load all supported file format readers
      Module.Engine.autoloadPlugins();

      Module.engineInstance = Module.Engine.create();

      // background must be set to black for proper blending with transparent canvas
      Module.engineInstance
        .getOptions()
        .setAsString("render.background.color", "#000000");

      Module.engineInstance.getOptions().setAsString("ui.loader_progress", "true");
      Module.engineInstance.getOptions().setAsString("ui.animation_progress", "true");
      Module.engineInstance.getOptions().setAsString("scene.animation.autoplay", "true");

      // setup coloring
      Module.engineInstance.getOptions().toggle("model.scivis.enable");
      Module.engineInstance
        .getOptions()
        .setAsString("model.scivis.array_name", "Colors");
      Module.engineInstance
        .getOptions()
        .setAsString("model.scivis.component", "-2");
      Module.engineInstance.getOptions().toggle("model.scivis.cells");

      // make it look nice
      Module.engineInstance
        .getOptions()
        .toggle("render.effect.antialiasing.enable");
      Module.engineInstance.getOptions().toggle("render.effect.tone_mapping");
      Module.engineInstance
        .getOptions()
        .toggle("render.effect.ambient_occlusion");
      Module.engineInstance.getOptions().toggle("render.hdri.ambient");

      // display widgets
      Module.engineInstance.getOptions().toggle("ui.axis");
      Module.engineInstance.getOptions().toggle("render.grid.enable");

      // default to +Z
      Module.engineInstance
        .getOptions()
        .setAsString("scene.up_direction", "+Z");

      // setup the window size based on the canvas size
      const scale = window.devicePixelRatio;
      Module.engineInstance
        .getWindow()
        .setSize(
          scale * Module.canvas.clientWidth,
          scale * Module.canvas.clientHeight,
        );

      // load file
      openFile(moduleRef, modelName);

      Module.engineInstance.getInteractor().start();
    })
    .catch((error) => console.error("Internal exception: " + error));
}

function openFile(moduleRef, file) {
  const scene = moduleRef.current.engineInstance.getScene();
  if (scene.supports(file)) {
    scene.clear();

    try {
      scene.add(file);
    } catch (e) {
      console.error("File " + file + " failed to load");
    }
  } else {
    console.error("File " + file + " cannot be opened");
  }
  moduleRef.current.engineInstance.getWindow().getCamera().resetToBounds(0.9);
  moduleRef.current.engineInstance.getWindow().render();
  moduleRef.current.currentFile = file;
}

interface F3DViewerProps {
  fileUrl: string;
}

const F3DViewer = forwardRef<any, F3DViewerProps>(({ fileUrl }, ref) => {
  const moduleRef = useRef(null);
  const [logs, setLogs] = useState<Array<{ type: 'debug' | 'info' | 'warning' | 'error' | 'command'; message: string }>>([]);
  const [isLogWindowOpen, setIsLogWindowOpen] = useState(false);
  const [commandInput, setCommandInput] = useState('');
  const logEndRef = useRef<HTMLDivElement>(null);
  const [severityFilters, setSeverityFilters] = useState({
    error: true,
    warning: true,
    info: true,
    debug: false,
  });

  // Add log entry
  const addLog = (message: string, type: 'debug' | 'info' | 'warning' | 'error' | 'command') => {
    setLogs(prev => [...prev, { type, message }]);
  };

  // Toggle severity filter
  const toggleSeverityFilter = (severity: 'debug' | 'info' | 'warning' | 'error') => {
    setSeverityFilters(prev => ({
      ...prev,
      [severity]: !prev[severity],
    }));
  };

  // Filter logs based on severity
  const filteredLogs = logs.filter(log => log.type === 'command' || severityFilters[log.type]);

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

    addLog(`> ${commandInput}`, 'command');
    
    // Execute commands
    try {
      if (moduleRef.current) {
        moduleRef.current.engineInstance.getInteractor().triggerCommand(commandInput);
        moduleRef.current.engineInstance.getWindow().render();
      }
    } catch (error) {
      addLog(`Error: ${error.message}`, 'error');
    }

    setCommandInput('');
  };

  useImperativeHandle(ref, () => ({
    loadFile: (file, buffer) => {
      // add to FS
      moduleRef.current.FS.writeFile(file, buffer);
      openFile(moduleRef, file);
    },
    setUpDirection: (direction) => {
      if (!moduleRef.current) return;
      // Set up direction in the engine options
      moduleRef.current.engineInstance
        .getOptions()
        .setAsString("scene.up_direction", direction);
      openFile(moduleRef, moduleRef.current.currentFile);
    },
    triggerCommand: (command: string) => {
      if (!moduleRef.current) return;
      moduleRef.current.engineInstance.getInteractor().triggerCommand(command);
      moduleRef.current.engineInstance.getWindow().render();
    },
    addLog: addLog,
  }));

  useEffect(() => {
    initViewer(moduleRef, fileUrl, addLog);
  }, [fileUrl]);

  return (
    <div className={styles.viewer}>
      <canvas id="canvas"></canvas>

      {!isLogWindowOpen && (
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
                className={`${styles.filterButton} ${styles.filterError} ${severityFilters.error ? styles.active : ''}`}
                onClick={() => toggleSeverityFilter('error')}
                title="Toggle errors"
              >
                Error
              </button>
              <button
                className={`${styles.filterButton} ${styles.filterWarning} ${severityFilters.warning ? styles.active : ''}`}
                onClick={() => toggleSeverityFilter('warning')}
                title="Toggle warnings"
              >
                Warning
              </button>
              <button
                className={`${styles.filterButton} ${styles.filterInfo} ${severityFilters.info ? styles.active : ''}`}
                onClick={() => toggleSeverityFilter('info')}
                title="Toggle info"
              >
                Info
              </button>
              <button
                className={`${styles.filterButton} ${styles.filterDebug} ${severityFilters.debug ? styles.active : ''}`}
                onClick={() => toggleSeverityFilter('debug')}
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
            {
              filteredLogs.map((log, idx) => (
                <div key={idx} className={`${styles.logEntry} ${styles[`log-${log.type}`]}`}>
                  {log.message.split('\n').map((line, lineIdx) => (
                    <React.Fragment key={lineIdx}>
                      {line}
                      {lineIdx < log.message.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              ))
            }
            <div ref={logEndRef} />
          </div>
          <form className={styles.logInput} onSubmit={handleCommandSubmit}>
            <input
              type="text"
              placeholder="Enter command..."
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
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
