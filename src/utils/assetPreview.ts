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

type HdrImage = {
  width: number;
  height: number;
  /** Tightly packed RGBE bytes, length width * height * 4. */
  pixels: Uint8Array;
};

function readHdrResolution(bytes: Uint8Array):
  | {
      width: number;
      height: number;
      pixelOffset: number;
    }
  | undefined {
  const head = new TextDecoder("ascii").decode(
    bytes.subarray(0, Math.min(bytes.length, 512)),
  );
  const match = /([+-])Y\s+(\d+)\s+([+-])X\s+(\d+)\s/.exec(head);
  if (!match) {
    return undefined;
  }
  const height = Number(match[2]);
  const width = Number(match[4]);
  if (!width || !height) {
    return undefined;
  }
  return {
    width,
    height,
    pixelOffset: match.index + match[0].length,
  };
}

function decodeHdr(bytes: Uint8Array): HdrImage | undefined {
  if (bytes[0] !== 0x23) {
    return undefined;
  }
  const resolution = readHdrResolution(bytes);
  if (!resolution) {
    return undefined;
  }
  const { width, height, pixelOffset } = resolution;
  const pixels = new Uint8Array(width * height * 4);
  let offset = pixelOffset;
  const plane = width * 4;
  const scanline = new Uint8Array(plane);

  for (let y = 0; y < height; y += 1) {
    const rle =
      bytes[offset] === 2 &&
      bytes[offset + 1] === 2 &&
      ((bytes[offset + 2] << 8) | bytes[offset + 3]) === width;
    if (!rle) {
      const rawBytes = width * height * 4;
      if (offset + rawBytes > bytes.length) {
        return undefined;
      }
      pixels.set(bytes.subarray(offset, offset + rawBytes));
      return { width, height, pixels };
    }
    offset += 4;
    let ptr = 0;
    while (ptr < plane) {
      const count = bytes[offset++];
      if (count === undefined) {
        return undefined;
      }
      if (count > 128) {
        const repeat = count - 128;
        const value = bytes[offset++];
        if (value === undefined || ptr + repeat > plane) {
          return undefined;
        }
        scanline.fill(value, ptr, ptr + repeat);
        ptr += repeat;
      } else {
        if (
          count === 0 ||
          ptr + count > plane ||
          offset + count > bytes.length
        ) {
          return undefined;
        }
        scanline.set(bytes.subarray(offset, offset + count), ptr);
        offset += count;
        ptr += count;
      }
    }
    const row = y * width * 4;
    for (let x = 0; x < width; x += 1) {
      const dst = row + x * 4;
      pixels[dst] = scanline[x];
      pixels[dst + 1] = scanline[x + width];
      pixels[dst + 2] = scanline[x + 2 * width];
      pixels[dst + 3] = scanline[x + 3 * width];
    }
  }
  return { width, height, pixels };
}

function rgbeToFloat(
  pixel: Uint8Array,
  index: number,
): [number, number, number] {
  const exponent = pixel[index + 3];
  if (exponent === 0) {
    return [0, 0, 0];
  }
  const scale = 2 ** (exponent - 128 - 8);
  return [
    pixel[index] * scale,
    pixel[index + 1] * scale,
    pixel[index + 2] * scale,
  ];
}

function floatToRgbe(
  r: number,
  g: number,
  b: number,
): [number, number, number, number] {
  const max = Math.max(r, g, b);
  if (!(max > 1e-32)) {
    return [0, 0, 0, 0];
  }
  const exponent = Math.floor(Math.log2(max)) + 1;
  const scale = 2 ** (8 - exponent);
  return [
    Math.min(255, Math.round(r * scale)),
    Math.min(255, Math.round(g * scale)),
    Math.min(255, Math.round(b * scale)),
    exponent + 128,
  ];
}

function encodeHdr(image: HdrImage): Uint8Array {
  const header = new TextEncoder().encode(
    `#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n-Y ${image.height} +X ${image.width}\n`,
  );
  // Uncompressed RGBE. F3D misreads wide RLE scanlines and draws stripes.
  const body = image.pixels;
  const rowBytes = image.width * 4;
  for (let y = 0; y < image.height; y += 1) {
    const row = y * rowBytes;
    const marker =
      body[row] === 2 &&
      body[row + 1] === 2 &&
      ((body[row + 2] << 8) | body[row + 3]) === image.width;
    if (marker) {
      body[row] = 3;
    }
  }
  const bytes = new Uint8Array(header.length + body.length);
  bytes.set(header, 0);
  bytes.set(body, header.length);
  return bytes;
}

function downsampleHdrHalf(image: HdrImage): HdrImage {
  const width = Math.floor(image.width / 2);
  const height = Math.floor(image.height / 2);
  const pixels = new Uint8Array(width * height * 4);
  for (let y = 0; y < height; y += 1) {
    const srcRow = y * 2 * image.width * 4;
    const nextRow = srcRow + image.width * 4;
    for (let x = 0; x < width; x += 1) {
      const x0 = x * 8;
      const samples = [
        rgbeToFloat(image.pixels, srcRow + x0),
        rgbeToFloat(image.pixels, srcRow + x0 + 4),
        rgbeToFloat(image.pixels, nextRow + x0),
        rgbeToFloat(image.pixels, nextRow + x0 + 4),
      ];
      const [r, g, b, exponent] = floatToRgbe(
        (samples[0][0] + samples[1][0] + samples[2][0] + samples[3][0]) / 4,
        (samples[0][1] + samples[1][1] + samples[2][1] + samples[3][1]) / 4,
        (samples[0][2] + samples[1][2] + samples[2][2] + samples[3][2]) / 4,
      );
      const dst = (y * width + x) * 4;
      pixels[dst] = r;
      pixels[dst + 1] = g;
      pixels[dst + 2] = b;
      pixels[dst + 3] = exponent;
    }
  }
  return { width, height, pixels };
}

/**
 * Shrink a Radiance HDR until both edges fit in `maxEdge` pixels.
 * Files that already fit, or that are not RGBE, are returned unchanged.
 */
export function limitHdrTexture(
  bytes: Uint8Array,
  maxEdge: number,
): Uint8Array {
  const resolution = readHdrResolution(bytes);
  if (
    !resolution ||
    (resolution.width <= maxEdge && resolution.height <= maxEdge)
  ) {
    return bytes;
  }
  const decoded = decodeHdr(bytes);
  if (!decoded) {
    return bytes;
  }
  let image = decoded;
  while (image.width > maxEdge || image.height > maxEdge) {
    if (image.width < 2 || image.height < 2) {
      break;
    }
    image = downsampleHdrHalf(image);
  }
  return encodeHdr(image);
}
