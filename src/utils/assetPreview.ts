const VIEWER_MODEL_PATH = /^\/data\/[^/]+$/i;

export function getFileExtension(filename: string): string {
  const base = filename.split("/").pop() ?? filename;
  const dot = base.lastIndexOf(".");
  if (dot <= 0 || dot === base.length - 1) {
    return "";
  }
  return base.slice(dot + 1).toLowerCase();
}

/** Allowed viewer model paths: same-origin files under `/data/` only. */
export function sanitizeViewerModelPath(
  model: string | null | undefined,
): string | undefined {
  if (!model) {
    return undefined;
  }

  let decoded: string;
  try {
    decoded = decodeURIComponent(model.trim());
  } catch {
    return undefined;
  }

  if (
    !decoded.startsWith("/") ||
    decoded.includes("://") ||
    decoded.includes("..") ||
    decoded.includes("\\")
  ) {
    return undefined;
  }

  if (!VIEWER_MODEL_PATH.test(decoded)) {
    return undefined;
  }

  return decoded;
}

export type PreviewOptionValue = string | number | boolean;

export type PreviewOptions = Record<string, PreviewOptionValue>;

export type PreviewVec3 = [number, number, number];

/** Applied after the file loads. `load()` always frames the model first. */
export type PreviewCamera = {
  zoom?: number;
  position?: PreviewVec3;
  focalPoint?: PreviewVec3;
  viewUp?: PreviewVec3;
  /** Camera offset from the focal point, in world axes. */
  direction?: PreviewVec3;
};

/** DOM id safe for a single in-page `<f3d-viewer>`. */
export function previewViewerDomId(file: string): string {
  const base = file.split("/").pop() ?? file;
  const raw = base.replace(/\.[^/.]+$/, "");
  const cleaned = raw.replace(/[^a-zA-Z0-9_-]/g, "_").replace(/^_+/, "");
  return `preview_${cleaned || "asset"}`;
}
