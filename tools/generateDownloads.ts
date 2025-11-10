import { Octokit } from "@octokit/core";
import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    // Get GH token from env
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      throw new Error("GITHUB_TOKEN environment variable is not set.");
    }

    let result = {
      tag: "",
      date: "",
      assets: {
        Windows: { binaries: [], icon: "cib:windows" },
        Linux: { binaries: [], icon: "mdi:linux" },
        macOS: { binaries: [], icon: "cib:apple" },
      },
    };

    const octokit = new Octokit({
      auth: token,
    });

    const releaseSelector = process.env.F3D_RELEASE || "latest";

    let response;
    if (releaseSelector === "latest") {
      response = await octokit.request(
        "GET /repos/f3d-app/f3d/releases/latest",
        {
          owner: "f3d-app",
          repo: "f3d",
          headers: { "X-GitHub-Api-Version": "2022-11-28" },
        },
      );
    } else {
      // treat as tag
      response = await octokit.request(
        "GET /repos/f3d-app/f3d/releases/tags/{tag}",
        {
          owner: "f3d-app",
          repo: "f3d",
          tag: releaseSelector,
          headers: { "X-GitHub-Api-Version": "2022-11-28" },
        },
      );
    }

    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch release (${releaseSelector}): ${response.status}`,
      );
    }

    result.tag = response.data.tag_name;
    result.date = response.data.published_at;

    const getAsset = function (
      assets,
      regex: RegExp,
      short: string,
      long: string,
    ) {
      const asset = assets.filter((a) => a.name.match(regex));

      if (asset.length === 0) {
        throw new Error(`Failed to find asset matching ${regex}`);
      }

      if (asset.length > 1) {
        throw new Error(`Multiple assets found matching ${regex}`);
      }

      return {
        name: asset[0].name,
        url: asset[0].browser_download_url,
        size: `${(asset[0].size / (1024 * 1024)).toFixed(1)} MB`,
        digest: asset[0].digest,
        short: short,
        long: long,
      };
    };

    // Windows
    result.assets.Windows.binaries.push(
      getAsset(
        response.data.assets,
        /Windows-x86_64-raytracing.exe/,
        "Installer",
        "Installer (.exe) with raytracing support",
      ),
    );
    result.assets.Windows.binaries.push(
      getAsset(
        response.data.assets,
        /Windows-x86_64-raytracing.zip/,
        "Portable",
        "Portable (.zip) with raytracing support",
      ),
    );
    result.assets.Windows.binaries.push(
      getAsset(
        response.data.assets,
        /Windows-x86_64.exe/,
        "Installer",
        "Installer (.exe) without raytracing support",
      ),
    );
    result.assets.Windows.binaries.push(
      getAsset(
        response.data.assets,
        /Windows-x86_64.zip/,
        "Portable",
        "Portable (.zip) without raytracing support",
      ),
    );

    // Linux
    result.assets.Linux.binaries.push(
      getAsset(
        response.data.assets,
        /Linux-x86_64-raytracing.deb/,
        "Package",
        "Package (.deb) with raytracing support",
      ),
    );
    result.assets.Linux.binaries.push(
      getAsset(
        response.data.assets,
        /Linux-x86_64-raytracing.tar.xz/,
        "Portable",
        "Tarball (.tar.xz) with raytracing support",
      ),
    );
    result.assets.Linux.binaries.push(
      getAsset(
        response.data.assets,
        /Linux-x86_64-raytracing.tar.gz/,
        "Portable",
        "Tarball (.tar.gz) with raytracing support",
      ),
    );
    result.assets.Linux.binaries.push(
      getAsset(
        response.data.assets,
        /Linux-x86_64.deb/,
        "Package",
        "Package (.deb) without raytracing support",
      ),
    );
    result.assets.Linux.binaries.push(
      getAsset(
        response.data.assets,
        /Linux-x86_64.tar.xz/,
        "Portable",
        "Tarball (.tar.xz) without raytracing support",
      ),
    );
    result.assets.Linux.binaries.push(
      getAsset(
        response.data.assets,
        /Linux-x86_64.tar.gz/,
        "Portable",
        "Tarball (.tar.gz) without raytracing support",
      ),
    );

    // macOS
    result.assets.macOS.binaries.push(
      getAsset(
        response.data.assets,
        /macOS-arm64-raytracing.dmg/,
        "Silicon",
        "Silicon installer with raytracing support",
      ),
    );
    result.assets.macOS.binaries.push(
      getAsset(
        response.data.assets,
        /macOS-x86_64-raytracing.dmg/,
        "Intel",
        "Intel installer with raytracing support",
      ),
    );
    result.assets.macOS.binaries.push(
      getAsset(
        response.data.assets,
        /macOS-arm64.dmg/,
        "Silicon",
        "Silicon installer without raytracing support",
      ),
    );
    result.assets.macOS.binaries.push(
      getAsset(
        response.data.assets,
        /macOS-x86_64.dmg/,
        "Intel",
        "Intel installer without raytracing support",
      ),
    );

    const outputPath = path.resolve(
      __dirname,
      "../src/pages/downloadLinks.json",
    );
    writeFileSync(outputPath, JSON.stringify(result, null, 2) + "\n");
    console.log(`Saved result to ${outputPath}`);
  } catch (error) {
    console.error("Error generating download links:", error);
    process.exit(1);
  }
})();
