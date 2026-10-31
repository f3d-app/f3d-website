import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Icon } from "@iconify/react";
import type { Engine } from "f3d";
import {
  previewViewerDomId,
  sanitizeViewerModelPath,
  type PreviewCamera,
  type PreviewOptions,
  type PreviewVec3,
} from "@site/src/utils/assetPreview";
import styles from "./styles.module.css";

type PreviewViewerElement = HTMLElement & {
  engine: Engine | null;
  options: PreviewOptions;
  load: (data: Uint8Array) => Promise<void>;
  exceptionMessage: (error: unknown) => string;
  _resize: () => void;
};

export type AssetPreviewModalProps = {
  title: string;
  filePath: string;
  options?: PreviewOptions;
  camera?: PreviewCamera;
  onClose: () => void;
};

function defaultPreviewOptions(): PreviewOptions {
  const isDesktop = !window.matchMedia("(max-width: 768px)").matches;
  return {
    "render.hdri.ambient": true,
    "render.effect.tone_mapping": true,
    "render.effect.antialiasing.mode": "fxaa",
    "render.effect.ambient_occlusion": isDesktop,
    "render.grid.enable": true,
    "render.grid.reflection": isDesktop ? 0.5 : 0,
    "scene.animation.autoplay": true,
    "ui.axis": true,
    "ui.loader_progress": true,
  };
}

function readException(viewer: PreviewViewerElement, error: unknown): string {
  try {
    return viewer.exceptionMessage(error);
  } catch {
    return error instanceof Error ? error.message : "Unknown preview error";
  }
}

function vec3(value: ArrayLike<number>): PreviewVec3 {
  return [Number(value[0]), Number(value[1]), Number(value[2])];
}

function applyPreviewCamera(
  viewer: PreviewViewerElement,
  camera: PreviewCamera | undefined,
) {
  if (!camera || !viewer.engine) {
    return;
  }

  const cam = viewer.engine.getWindow().getCamera();
  const zoom = camera.zoom ?? 0.9;
  cam.resetToBounds(zoom);

  if (camera.position) {
    cam.position = camera.position;
    if (camera.focalPoint) {
      cam.focalPoint = camera.focalPoint;
    }
    if (camera.viewUp) {
      cam.viewUp = camera.viewUp;
    }
  } else if (camera.direction) {
    const focal = vec3(cam.focalPoint);
    const pos = vec3(cam.position);
    const dist =
      Math.hypot(pos[0] - focal[0], pos[1] - focal[1], pos[2] - focal[2]) || 1;
    const len = Math.hypot(...camera.direction) || 1;
    cam.position = [
      focal[0] + (camera.direction[0] / len) * dist,
      focal[1] + (camera.direction[1] / len) * dist,
      focal[2] + (camera.direction[2] / len) * dist,
    ];
    if (camera.viewUp) {
      cam.viewUp = camera.viewUp;
    }
  }

  viewer.engine.getWindow().render();
}

function waitFrames(count: number): Promise<void> {
  return new Promise((resolve) => {
    const step = (left: number) => {
      if (left <= 0) {
        resolve();
        return;
      }
      requestAnimationFrame(() => step(left - 1));
    };
    step(count);
  });
}

function teardownEngine(engine: Engine | null | undefined): Promise<void> {
  if (!engine) {
    return Promise.resolve();
  }

  let settled = false;
  const dispose = () => {
    if (settled) {
      return;
    }
    settled = true;
    try {
      engine[Symbol.dispose]();
    } catch {
      // Ignore a second dispose during a fast close/reopen.
    }
  };

  try {
    const interactor = engine.getInteractor();
    try {
      interactor.setEventLoopUserCallback(() => {});
      interactor.setNotificationCallback(() => false);
    } catch {
      // Callbacks may already be gone.
    }
    // Ask the current frame to exit. Disposing before that frame returns
    // calls a freed WASM function (`indirect call to null` / `null function`).
    interactor.requestStop();
  } catch {
    dispose();
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const finish = () => {
      void waitFrames(3).then(() => {
        dispose();
        resolve();
      });
    };

    if (document.hidden) {
      const onVisible = () => {
        if (document.hidden) {
          return;
        }
        document.removeEventListener("visibilitychange", onVisible);
        finish();
      };
      document.addEventListener("visibilitychange", onVisible);
      return;
    }

    finish();
  });
}

export default function AssetPreviewModal({
  title,
  filePath,
  options,
  camera,
  onClose,
}: AssetPreviewModalProps): React.ReactElement {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PreviewViewerElement>(null);
  const onCloseRef = useRef(onClose);
  const releasedRef = useRef(false);
  const loadTaskRef = useRef(Promise.resolve());
  onCloseRef.current = onClose;

  const safePath = sanitizeViewerModelPath(filePath);
  const src = useBaseUrl(safePath ?? "");
  const logoUrl = useBaseUrl("/logos/logo.svg");
  const domId = previewViewerDomId(safePath ?? filePath);

  const [wasmReady, setWasmReady] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [error, setError] = useState<string | undefined>(
    safePath ? undefined : "This file cannot be previewed.",
  );

  // Stop the WASM loop while the canvas is still mounted, then unmount.
  const requestClose = () => {
    if (releasedRef.current) {
      return;
    }
    releasedRef.current = true;
    if (dialogRef.current) {
      dialogRef.current.style.visibility = "hidden";
    }

    const viewer = viewerRef.current;
    const finish = () => onCloseRef.current();
    if (!viewer) {
      finish();
      return;
    }

    void (async () => {
      await loadTaskRef.current.catch(() => undefined);
      await teardownEngine(viewer.engine);
      finish();
    })();
  };

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        void requestClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, []);

  useEffect(() => {
    if (!safePath) {
      return;
    }

    let cancelled = false;
    import("f3d")
      .then(async (module) => {
        await module.default();
        if (!cancelled) {
          setWasmReady(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("The 3D viewer could not be loaded.");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [safePath]);

  useLayoutEffect(() => {
    const viewer = viewerRef.current;
    if (!wasmReady || !viewer || !safePath || !src) {
      return;
    }

    let disposed = false;
    const isClosed = () => disposed || releasedRef.current;
    const optionsToApply = { ...defaultPreviewOptions(), ...options };
    const enableVolume = optionsToApply["model.volume.enable"] === true;
    const initialOptions = enableVolume
      ? { ...optionsToApply, "model.volume.enable": false }
      : optionsToApply;
    const originalLoad = viewer.load.bind(viewer);

    const onReady = () => {
      if (isClosed()) {
        return;
      }
      viewer.options = initialOptions;
      // The element turns DPI scaling on before `ready`. Heavy scenes
      // (point clouds, volumes) opt out, then the canvas has to be resized.
      if (optionsToApply["ui.dpi_aware"] === false) {
        viewer._resize();
      }
    };

    // `src` calls `load` when the file bytes arrive. The overlay stays up
    // until that call finishes, which is when the model is actually shown.
    viewer.load = async (data: Uint8Array) => {
      if (isClosed()) {
        return;
      }
      const task = (async () => {
        try {
          await originalLoad(data);
          if (isClosed() || !viewer.engine) {
            return;
          }
          // Volume rendering rejects an empty scene, so turn it on after the
          // image is loaded.
          if (enableVolume) {
            viewer.options = { "model.volume.enable": true };
            if (!camera) {
              viewer.engine.getWindow().getCamera().resetToBounds(0.9);
            }
          }
          applyPreviewCamera(viewer, camera);
          viewer.engine.getWindow().render();
          setSceneReady(true);
        } catch (error) {
          if (isClosed()) {
            return;
          }
          console.error("F3D preview failed:", readException(viewer, error));
          setError("This file could not be previewed.");
        }
      })();
      loadTaskRef.current = task;
      await task;
    };

    viewer.addEventListener("ready", onReady);
    // `ready` can fire before this effect attaches, because the element
    // creates its engine during mount.
    if (viewer.engine) {
      onReady();
    }
    viewer.setAttribute("src", src);

    return () => {
      disposed = true;
      viewer.removeEventListener("ready", onReady);
      if (releasedRef.current) {
        return;
      }
      releasedRef.current = true;
      void (async () => {
        await loadTaskRef.current.catch(() => undefined);
        await teardownEngine(viewer.engine);
      })();
    };
  }, [camera, options, safePath, src, wasmReady]);

  return (
    <div className={styles.backdrop} onClick={() => requestClose()}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            className={styles.closeButton}
            aria-label="Close preview"
            onClick={() => requestClose()}
          >
            <Icon icon="material-symbols:close" aria-hidden="true" />
          </button>
        </div>
        <div className={styles.stage}>
          {error ? (
            <p className={styles.status}>{error}</p>
          ) : (
            <>
              {wasmReady && (
                <f3d-viewer
                  id={domId}
                  ref={viewerRef}
                  className={styles.viewer}
                />
              )}
              {!sceneReady && (
                <div className={styles.status} role="status">
                  <img src={logoUrl} alt="" className={styles.hourglass} />
                  <p className={styles.statusText}>Loading preview...</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
