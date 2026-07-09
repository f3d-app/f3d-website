import React, { useRef, useState, useEffect, ReactNode } from "react";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import F3DViewer from "@site/src/components/F3DViewer";
import { Icon } from "@iconify/react";
import styles from "./viewer.module.css";

interface ViewerAppProps {
  model?: string;
}

function ViewerApp({ model }: ViewerAppProps) {
  const viewerRef = useRef<any>(null);
  const [upDirection, setUpDirection] = useState("+Z");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  // Default true (SSR-safe); corrected to false on mobile after hydration.
  // Workaround: grid + reflection cause depth artifacts on mobile when SSAO is off.
  const [ssaoDefault, setSsaoDefault] = useState(true);
  const [gridDefault, setGridDefault] = useState(true);
  const [reflectionDefault, setReflectionDefault] = useState(true);
  const [fileName, setFileName] = useState(model || "f3d.vtp");
  const [fileStatus, setFileStatus] = useState<"loading" | "success" | "error">(
    "success",
  );
  const [fileError, setFileError] = useState<string | undefined>(undefined);
  const fileUrl = model || useBaseUrl("/data/f3d.vtp");

  // window is unavailable during SSR, so detect mobile only after mount.
  useEffect(() => {
    const isDesktop = !window.matchMedia("(max-width: 768px)").matches;
    setSsaoDefault(isDesktop);
    setGridDefault(isDesktop);
    setReflectionDefault(isDesktop);
  }, []);

  // Prevent the browser from accepting a dropped file outside the drop zone
  useEffect(() => {
    const prevent = (e: DragEvent) => e.preventDefault();
    window.addEventListener("dragover", prevent);
    window.addEventListener("drop", prevent);
    return () => {
      window.removeEventListener("dragover", prevent);
      window.removeEventListener("drop", prevent);
    };
  }, []);

  // Callback for switch toggles
  const handleSwitchToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    const idOptionMappings: Record<string, string> = {
      grid: `set render.grid.enable ${checked}`,
      reflection: `set render.grid.reflection ${checked ? ".5" : "0"}`,
      axis: `set ui.axis ${checked}`,
      fxaa: `set render.effect.antialiasing.mode ${checked ? "fxaa" : "none"}`,
      tone: `set render.effect.tone_mapping ${checked}`,
      ssao: `set render.effect.ambient_occlusion ${checked}`,
      ambient: `set render.hdri.ambient ${checked}`,
    };

    viewerRef.current?.triggerCommand(`${idOptionMappings[name]}`);

    // If grid is disabled, also disable reflection and update its value
    if (name === "grid") {
      const reflectionInput = document.getElementById(
        "reflection",
      ) as HTMLInputElement;
      reflectionInput.checked = checked && reflectionInput.checked;
      reflectionInput.disabled = !checked;
      viewerRef.current?.triggerCommand(
        `set render.grid.reflection ${reflectionInput.checked ? ".5" : "0"}`,
      );
    }
  };

  // Load a File object into the viewer
  const loadFile = (file: File) => {
    setFileName(file.name);
    setFileStatus("loading");

    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
      const progressContainer = document.getElementById("progressContainer");
      const progressFill = document.getElementById("progressFill");
      const progressText = document.getElementById("progressText");

      if (progressFill && progressText) {
        progressFill.style.width = "100%";
        progressText.textContent = "100%";
      }

      if (progressContainer) {
        progressContainer.classList.add(styles.fadeOut);
        setTimeout(() => {
          progressContainer.style.display = "none";
          progressContainer.classList.remove(styles.fadeOut);
        }, 1000);
      }

      const result = viewerRef.current?.loadFile(
        new Uint8Array(reader.result as ArrayBuffer),
      );
      if (result.success === false) {
        setFileStatus("error");
        setFileError(result.error);
      } else {
        setFileStatus("success");
        setFileError(undefined);
      }
    });

    reader.addEventListener("error", () => {
      setFileStatus("error");
      setFileError("Failed to read file");
    });

    reader.addEventListener("progress", (evt) => {
      const progressContainer = document.getElementById("progressContainer");
      const progressFill = document.getElementById("progressFill");
      const progressText = document.getElementById("progressText");

      if (evt.lengthComputable && progressFill && progressText) {
        const progress = Math.floor((100 * evt.loaded) / evt.total);
        if (progressContainer) {
          progressContainer.style.display = "flex";
        }
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
      }
    });

    const progressContainer = document.getElementById("progressContainer");
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");

    if (progressFill && progressText && progressContainer) {
      progressFill.style.width = "0%";
      progressText.textContent = "0%";
      progressContainer.style.display = "flex";
    }

    reader.readAsArrayBuffer(file);
  };

  // Handle file selection when the dialog returns
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) loadFile(file);
  };

  // Drag-and-drop handlers
  const handleDragEnter = (event: React.DragEvent) => {
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) loadFile(file);
  };

  // Callback for up direction buttons
  const handleUpDirection = (direction: "+Y" | "+Z") => {
    setUpDirection(direction);
    viewerRef.current?.setUpDirection?.(direction);
  };

  return (
    <div className={styles.viewerPage}>
      <div className={styles.layout}>
        <nav
          className={`${styles.menuPanel} ${isMobileMenuOpen ? styles.menuPanelOpen : ""}`}
          aria-label="Viewer controls"
        >
          <div
            className={styles.menuCloseButton}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close controls panel"
          >
            <Icon icon="material-symbols:close" />
          </div>
          <div className={styles.fileInputGroup}>
            <label className={styles.fileLabel} htmlFor="file-selector">
              <input
                className={styles.fileInput}
                type="file"
                id="file-selector"
                accept=".gml,.gltf,.glb,.obj,.ply,.pts,.stl,.vtk,.vtp,.vtu,.vtkhdf,.3ds,.wrl,.vrml,.fbx,.dae,.dxf,.off,.x,.3mf,.ex2,.exo,.e,.g,.stp,.step,.igs,.iges,.brep,.xbf,.drc,.mdl,.nc,.cdf,.ncdf,.ifc"
                onChange={handleFileChange}
              />
              <span className="button button--primary button--lg">
                <Icon
                  icon="material-symbols:folder-open"
                  className={styles.fileButtonIcon}
                />
                Open a file...
              </span>
            </label>
            <span className={styles.dragHint}>or drag &amp; drop a file</span>
            {(() => {
              const badgeConfig = {
                success: {
                  mod: styles.fileNameBadgeSuccess,
                  icon: "material-symbols:check-circle-outline",
                  iconClass: styles.fileBadgeIcon,
                },
                error: {
                  mod: styles.fileNameBadgeError,
                  icon: "material-symbols:error-outline",
                  iconClass: styles.fileBadgeIcon,
                },
                loading: {
                  mod: styles.fileNameBadgeLoading,
                  icon: "material-symbols:progress-activity",
                  iconClass: `${styles.fileBadgeIcon} ${styles.fileBadgeSpinner}`,
                },
              };
              const { mod, icon, iconClass } = badgeConfig[fileStatus];
              return (
                <span
                  className={`${styles.fileNameBadge} ${mod}`}
                  title={fileError}
                >
                  <Icon icon={icon} className={iconClass} />
                  <span>{fileName}</span>
                </span>
              );
            })()}
          </div>
          <div className={styles.upDirectionGroup}>
            <button
              id="y-up"
              className={
                upDirection === "+Y" ? styles.upButtonActive : styles.upButton
              }
              type="button"
              onClick={() => handleUpDirection("+Y")}
            >
              +Y
            </button>
            <button
              id="z-up"
              className={
                upDirection === "+Z" ? styles.upButtonActive : styles.upButton
              }
              type="button"
              onClick={() => handleUpDirection("+Z")}
            >
              +Z
            </button>
            <label className={styles.upLabel}>Up</label>
          </div>
          <div className={styles.sectionLabel}>Widgets</div>
          <div className={styles.switchField}>
            <input
              key={String(gridDefault)}
              id="grid"
              type="checkbox"
              name="grid"
              className={styles.switchInput}
              defaultChecked={gridDefault}
              onChange={handleSwitchToggle}
            />
            <label htmlFor="grid">Grid</label>
          </div>
          <div className={styles.switchField}>
            <input
              key={`reflection-${String(reflectionDefault)}`}
              id="reflection"
              type="checkbox"
              name="reflection"
              className={styles.switchInput}
              defaultChecked={reflectionDefault}
              disabled={!gridDefault}
              onChange={handleSwitchToggle}
            />
            <label htmlFor="reflection">Reflection</label>
          </div>
          <div className={styles.switchField}>
            <input
              id="axis"
              type="checkbox"
              name="axis"
              className={styles.switchInput}
              defaultChecked
              onChange={handleSwitchToggle}
            />
            <label htmlFor="axis">Axis</label>
          </div>
          <div className={styles.sectionLabel}>Rendering</div>
          <div className={styles.switchField}>
            <input
              id="fxaa"
              type="checkbox"
              name="fxaa"
              className={styles.switchInput}
              defaultChecked
              onChange={handleSwitchToggle}
            />
            <label htmlFor="fxaa">Anti-aliasing</label>
          </div>
          <div className={styles.switchField}>
            <input
              id="tone"
              type="checkbox"
              name="tone"
              className={styles.switchInput}
              defaultChecked
              onChange={handleSwitchToggle}
            />
            <label htmlFor="tone">Tone mapping</label>
          </div>
          <div className={styles.switchField}>
            <input
              key={String(ssaoDefault)}
              id="ssao"
              type="checkbox"
              name="ssao"
              className={styles.switchInput}
              // Keep the checkbox in sync with the engine: SSAO is off by default on mobile.
              defaultChecked={ssaoDefault}
              onChange={handleSwitchToggle}
            />
            <label htmlFor="ssao">Ambient occlusion</label>
          </div>
          <div className={styles.sectionLabel}>Lighting</div>
          <div className={styles.switchField}>
            <input
              id="ambient"
              type="checkbox"
              name="ambient"
              className={styles.switchInput}
              defaultChecked
              onChange={handleSwitchToggle}
            />
            <label htmlFor="ambient">Ambient light</label>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div
            className={styles.mobileMenuBackdrop}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <main className={styles.viewerPanel}>
          <div
            className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.mobileMenuToggleHidden : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle controls panel"
            title="Controls"
          >
            <Icon icon="material-symbols:settings" />
          </div>
          <div
            className={`${styles.dropZone} ${isDragging ? styles.dropZoneActive : ""}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {isDragging && (
              <div className={styles.dropOverlay}>
                <Icon
                  icon="material-symbols:upload-file"
                  className={styles.dropIcon}
                />
                <span>Drop file to open</span>
              </div>
            )}
            <F3DViewer ref={viewerRef} fileUrl={fileUrl} />
          </div>
        </main>
      </div>
      <div className={styles.progressContainer} id="progressContainer">
        <span className={styles.progressText} id="progressText">
          0%
        </span>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            id="progressFill"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default function Viewer(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  // Remove the leading '#' and parse as query string
  const hashWithoutHash = location.hash.substring(1);
  const searchParams = new URLSearchParams(hashWithoutHash);
  const model = searchParams.get("model") || undefined;

  return (
    <Layout
      title="Web viewer"
      description="Web version of F3D based on the webassembly bindings."
    >
      <ViewerApp model={model} />
    </Layout>
  );
}
