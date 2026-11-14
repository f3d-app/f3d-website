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
  type PreviewOptionValue,
  type PreviewVec3,
} from "@site/src/utils/assetPreview";
import styles from "./styles.module.css";

type PreviewViewerElement = HTMLElement & {
  engine: Engine | null;
  enginePromise: Promise<Engine | null> | null;
  resizeObserver: ResizeObserver | null;
  options: PreviewOptions;
  load: (data: Uint8Array) => Promise<void>;
  exceptionMessage: (error: unknown) => string;
  _resize: () => void;
  _ensureEngine?: () => Promise<Engine | null>;
  module?: {
    Engine: {
      setReaderOption: (name: string, value: string) => void;
    };
  };
};

const READER_OPTION = /^[A-Z][A-Za-z0-9]*\./;

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

function optionToString(key: string, value: PreviewOptionValue): string {
  // F3D 4.0 skybox is an enum, not a boolean.
  if (key === "render.background.skybox") {
    if (value === true || value === "true") {
      return "enabled";
    }
    if (value === false || value === "false") {
      return "disabled";
    }
  }
  return String(value);
}

function applyReaderOptions(
  viewer: PreviewViewerElement,
  options: PreviewOptions,
) {
  const setReaderOption = viewer.module?.Engine?.setReaderOption;
  if (!setReaderOption) {
    return;
  }
  for (const [key, value] of Object.entries(options)) {
    if (!READER_OPTION.test(key)) {
      continue;
    }
    try {
      setReaderOption(key, String(value));
    } catch {
      // This reader may not expose the option.
    }
  }
}

function applyViewerOptions(
  viewer: PreviewViewerElement,
  options: PreviewOptions,
) {
  if (!viewer.engine) {
    return;
  }
  const engineOptions = viewer.engine.getOptions();
  for (const [key, value] of Object.entries(options)) {
    if (READER_OPTION.test(key)) {
      continue;
    }
    try {
      engineOptions.setAsString(key, optionToString(key, value));
    } catch {
      // Skip an invalid key and keep applying the rest.
    }
  }
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

const LOOP_TRACKER = Symbol.for("f3d.previewLoopTracker");

type LoopTracker = {
  native: typeof window.requestAnimationFrame;
  pending: () => number;
};

function installEventLoopTracker(): void {
  if (typeof window === "undefined") {
    return;
  }
  const host = window as Window & { [LOOP_TRACKER]?: LoopTracker };
  if (host[LOOP_TRACKER]) {
    return;
  }

  const native = window.requestAnimationFrame.bind(window);
  let pending = 0;
  host[LOOP_TRACKER] = { native, pending: () => pending };

  window.requestAnimationFrame = ((callback: FrameRequestCallback) => {
    let tracked = false;
    try {
      tracked = Function.prototype.toString
        .call(callback)
        .includes("unRegisterInteractor");
    } catch {
      tracked = false;
    }
    if (tracked) {
      pending += 1;
    }
    return native((time) => {
      let result: unknown;
      try {
        result = callback(time);
      } catch (error) {
        if (tracked) {
          pending -= 1;
        }
        throw error;
      }
      if (!tracked) {
        return;
      }
      if (result && typeof (result as Promise<unknown>).then === "function") {
        (result as Promise<unknown>).then(
          () => {
            pending -= 1;
          },
          () => {
            pending -= 1;
          },
        );
      } else {
        pending -= 1;
      }
    });
  }) as typeof window.requestAnimationFrame;
}

function loopTracker(): LoopTracker | undefined {
  return (window as Window & { [LOOP_TRACKER]?: LoopTracker })[LOOP_TRACKER];
}

function nextNativeFrame(): Promise<void> {
  const native =
    loopTracker()?.native ?? window.requestAnimationFrame.bind(window);
  return new Promise((resolve) => {
    native(() => resolve());
  });
}

async function waitForRenderLoopToStop(): Promise<boolean> {
  const start = performance.now();
  let idleFrames = 0;
  while (performance.now() - start < 8000) {
    if ((loopTracker()?.pending() ?? 0) === 0) {
      idleFrames += 1;
      if (idleFrames >= 2) {
        return true;
      }
    } else {
      idleFrames = 0;
    }
    await nextNativeFrame();
  }
  return (loopTracker()?.pending() ?? 0) === 0;
}

if (typeof window !== "undefined") {
  installEventLoopTracker();
}

async function teardownViewer(
  viewer: PreviewViewerElement | null,
): Promise<void> {
  if (!viewer) {
    return;
  }

  viewer.load = async () => {};
  viewer._resize = () => {};
  viewer._ensureEngine = async () => viewer.engine;
  try {
    viewer.resizeObserver?.disconnect();
  } catch {
    // Observer may already be disconnected.
  }

  try {
    await viewer.enginePromise;
  } catch {
    // Engine creation can fail if the element was removed mid-init.
  }

  const engine = viewer.engine;
  if (!engine) {
    return;
  }

  try {
    // The queued animation frame must finish before the engine is freed.
    engine.getInteractor().stop();
  } catch {
    try {
      engine.getInteractor().requestStop();
    } catch {
      // The loop may not have started.
    }
  }

  const loopStopped = await waitForRenderLoopToStop();
  if (loopStopped) {
    try {
      engine.getScene().clear();
    } catch {
      // The scene may already be gone.
    }
    try {
      engine[Symbol.dispose]();
    } catch {
      // A fast reopen can dispose the same engine twice.
    }
  }

  viewer.engine = null;
  viewer.enginePromise = Promise.resolve(null);
}

let previewModulePromise: Promise<void> | undefined;

function loadPreviewModule(): Promise<void> {
  previewModulePromise ??= import("f3d")
    .then((module) => module.default())
    .then(() => undefined)
    .catch((error: unknown) => {
      previewModulePromise = undefined;
      throw error;
    });
  return previewModulePromise;
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
  const backdropPressRef = useRef(false);
  const loadTaskRef = useRef(Promise.resolve());
  const abortRef = useRef<AbortController | null>(null);
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

  const requestClose = () => {
    if (releasedRef.current) {
      return;
    }
    releasedRef.current = true;
    abortRef.current?.abort();
    document.body.style.overflow = "";
    if (dialogRef.current) {
      dialogRef.current.style.visibility = "hidden";
      const backdrop = dialogRef.current.parentElement;
      if (backdrop) {
        backdrop.style.visibility = "hidden";
        backdrop.style.pointerEvents = "none";
      }
    }

    const viewer = viewerRef.current;
    const finish = () => onCloseRef.current();
    if (!viewer) {
      finish();
      return;
    }

    void (async () => {
      await loadTaskRef.current.catch(() => undefined);
      await teardownViewer(viewer);
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
    loadPreviewModule()
      .then(() => {
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
    const originalLoad = viewer.load.bind(viewer);
    const abort = new AbortController();
    abortRef.current = abort;

    const task = (async () => {
      try {
        await viewer.enginePromise;
        if (isClosed() || !viewer.engine) {
          return;
        }
        applyReaderOptions(viewer, optionsToApply);
        // Volume actors are built inside load(), so the flag has to be on first.
        applyViewerOptions(viewer, optionsToApply);
        if (optionsToApply["ui.dpi_aware"] === false) {
          viewer._resize();
        }

        const response = await fetch(src, { signal: abort.signal });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        let data = new Uint8Array(await response.arrayBuffer());
        if (isClosed()) {
          return;
        }

        await originalLoad(data);
        data = new Uint8Array(0);
        if (isClosed() || !viewer.engine) {
          return;
        }
        // load() clears the scene, so options have to be applied again.
        applyViewerOptions(viewer, optionsToApply);
        if (enableVolume) {
          viewer.engine.getWindow().getCamera().resetToBounds(0.9);
        }
        applyPreviewCamera(viewer, camera);
        viewer.engine.getWindow().render();
        setSceneReady(true);
      } catch (error) {
        if (
          isClosed() ||
          (error instanceof DOMException && error.name === "AbortError")
        ) {
          return;
        }
        console.error("F3D preview failed:", readException(viewer, error));
        setError("This file could not be previewed.");
      }
    })();
    loadTaskRef.current = task;

    return () => {
      disposed = true;
      abort.abort();
      if (abortRef.current === abort) {
        abortRef.current = null;
      }
      if (releasedRef.current) {
        return;
      }
      releasedRef.current = true;
      void (async () => {
        await loadTaskRef.current.catch(() => undefined);
        await teardownViewer(viewer);
      })();
    };
  }, [camera, options, safePath, src, wasmReady]);

  return (
    <div
      className={styles.backdrop}
      onPointerDown={(event) => {
        backdropPressRef.current = event.target === event.currentTarget;
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget && backdropPressRef.current) {
          requestClose();
        }
        backdropPressRef.current = false;
      }}
    >
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
