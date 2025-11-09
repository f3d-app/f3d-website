import { mkdir, rm, cp, writeFile, readFile } from "fs/promises";
import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from 'url';
import fs from "fs";

import { processUserOptions, processLibOptions, convertGithubAdmonitions, fixDevLinks, fixImages, fixContributingLinks } from "./markdownFixups";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

// Configuration
const REPO_URL = "https://github.com/mwestphal/f3d";
const SOURCE_DIR = path.join(__dirname, "f3d-src");
const OUTPUT_DIR = path.join(__dirname, "doxygen_output");

async function fetchRepository(tag: string): Promise<void> {
    console.log(`Fetching F3D repository at tag ${tag}...`);

    // Clean up any existing source directory
    try {
        await rm(SOURCE_DIR, { recursive: true, force: true });
    } catch (error) {
        // Directory might not exist, that's ok
    }

    // Clone the repository at the specific tag
    const cloneCmd = `git clone --depth 1 --branch ${tag} ${REPO_URL} "${SOURCE_DIR}"`;

    try {
        const { stdout, stderr } = await execAsync(cloneCmd);
        console.log("Repository cloned successfully");
        if (stderr) console.log("Git output:", stderr);
    } catch (error) {
        throw new Error(`Failed to clone repository: ${(error as Error).message}`);
    }
}

async function runDoxygen(): Promise<void> {
    console.log("Running doxygen...");

    for (const api of ["libf3d", "vtkext"]) {
        const apiOutputDir = path.join(OUTPUT_DIR, api);
        try {
            await rm(apiOutputDir, { recursive: true, force: true });
        } catch (error) {
            // Directory might not exist, that's ok
        }

        // Ensure output directory exists
        await mkdir(apiOutputDir, { recursive: true });

        const doxygenCmd = `doxygen ${__dirname}/Doxyfile-${api}`;

        try {
            await execAsync(doxygenCmd);

            console.log("Doxygen completed successfully");

        } catch (error) {
            throw new Error(`Failed to run doxygen: ${(error as Error).message}`);
        }

        await runSeaborg(api);
    }
}

async function runSeaborg(api: string): Promise<void> {
    console.log("Running seaborg...");

    const inPath = path.join(__dirname, 'doxygen_output', api, 'xml');
    const outPath = path.join(__dirname, '..', 'docs', `api-${api}`);

    const seaborgCmd = `seaborg ${inPath} ${outPath}`;

    try {
        const { stdout, stderr } = await execAsync(seaborgCmd);

        console.log("Seaborg completed successfully");
        if (stdout) console.log("Seaborg output:", stdout);
        if (stderr) console.log("Seaborg warnings/errors:", stderr);

    } catch (error) {
        throw new Error(`Failed to run seaborg: ${(error as Error).message}`);
    }


    // Postprocess files in ../docs/api
    console.log("Postprocessing generated markdown files...");

    // List files in outPath
    const filesToProcess = await fs.promises.readdir(outPath);
    for (const file of filesToProcess) {
        if (file.endsWith('.md')) {
            const filePath = path.join(outPath, file);
            let content = await fs.promises.readFile(filePath, 'utf-8');

            // First apply the multi-line regex before splitting into lines
            // replace <a> elements by Markdown anchors
            content = content.replace(/<a id="([^"]+)"><\/a>\n(.+)/g, '$2 {#$1}');

            const lines = content.split(/\r?\n/g);
            const newLines: string[] = [];
            for (let i = 0; i < lines.length; i++) {
                // remove lines starting with "**TODO**" and following lines
                if (lines[i].startsWith("**TODO**:") || lines[i].includes('{"type":"element"')) {
                    continue;
                }

                // remove links when pointing to undefined.md
                lines[i] = lines[i].replace(/\[(.+)\]\(undefined.md#undefined\)/g, '$1');

                // remove h1 anchor links and point to the file only
                lines[i] = lines[i].replace(/\(([^.#]+)\.md#\1\)/g, '($1.md)');

                // remove h1 anchors
                lines[i] = lines[i].replace(/^# (.+) \{#.*\}$/g, '# $1');

                // remove useless backslashes before underscores in h1 anchors
                if (lines[i].startsWith('# ')) {
                    lines[i] = lines[i].replaceAll(/\\_/g, '_');
                }

                // remove file in namespace
                if (file.includes('namespace') && lines[i].startsWith("**Definition**")) {
                    continue;
                }

                // fix links to files starting with underscore
                lines[i] = lines[i].replace(/\(_([a-z]+)(.*)\.md\)/g, (_, letter, rest) => `(${letter.toUpperCase()}${rest}.md)`);

                newLines.push(lines[i]);
            }
            content = newLines.join('\n');
            await fs.promises.writeFile(filePath, content, 'utf-8');
            console.log(`Postprocessed ${file}`);
        }
    }

    console.log("Postprocessing completed.");
}

async function copyDocs(): Promise<void> {
    console.log("Copying documentation...");

    try {
        // copy user and libf3d docs
        for (const dir of ["user", "libf3d"]) {
            const srcDir = path.join(SOURCE_DIR, "doc", dir);
            const destDir = path.join(__dirname, "..", "docs", dir);
            await cp(srcDir, destDir, {recursive: true});
        }

        // copy dev doc
        const srcDir = path.join(SOURCE_DIR, "doc", "dev");
        const destDir = path.join(__dirname, "..", "dev");
        await cp(srcDir, destDir, {recursive: true});

        // copy colormaps png
        const srcFile = path.join(SOURCE_DIR, "resources", "colormaps");
        const destFile = path.join(__dirname, "..", "docs", "user");
        await cp(srcFile, destFile, {
            recursive: true,
                filter: (src: string, _: string) => {
                    if (["licenses.md"].includes(path.basename(src))) {
                        return false;
                    }
                    return true;
                }
            });

        // copy some specific files
        const files = ["CONTRIBUTING.md", "CODE_OF_CONDUCT.md"];
        const preffixes = ["01-", "02-"];
        for (var i = 0; i < 2; i++) {
            const srcFile = path.join(SOURCE_DIR, files[i]);
            const destFile = path.join(__dirname, "..", "dev", preffixes[i] + files[i]);
            await cp(srcFile, destFile);
        }

        // copy CHANGELOG.md
        const changelogSrc = path.join(SOURCE_DIR, "doc", "CHANGELOG.md");
        const changelogDest = path.join(__dirname, "..", "src", "pages", "CHANGELOG.md");
        await cp(changelogSrc, changelogDest);

        // copy LICENSE.md
        const licenseSrc = path.join(SOURCE_DIR, "LICENSE.md");
        const licenseDest = path.join(__dirname, "..", "src", "pages", "LICENSE.md");
        await cp(licenseSrc, licenseDest);

        console.log("Documentation copied successfully");
    } catch (error) {
        throw new Error(`Failed to copy documentation: ${(error as Error).message}`);
    }

    // Postprocess some markdown files
    await preprocessMarkdown();
}

async function preprocessMarkdown(): Promise<void> {
    // Improve user/03-OPTIONS.md anchors and formatting
    for (const file of ["docs/user/03-OPTIONS.md"]) {
        const filePath = path.join(__dirname, "..", file);
        const contents = await readFile(filePath, { encoding: 'utf8' });
        await writeFile(filePath, processUserOptions(contents));
    }

    // Fix links in CONTRIBUTING.md
    for (const file of ["dev/01-CONTRIBUTING.md"]) {
         const filePath = path.join(__dirname, "..", file);
         const contents = await readFile(filePath, { encoding: 'utf8' });
        await writeFile(filePath, fixContributingLinks(contents));
     }

    // Improve libf3d/03-OPTIONS.md anchors and formatting
    for (const file of ["docs/libf3d/03-OPTIONS.md"]) {
        const filePath = path.join(__dirname, "..", file);
        const contents = await readFile(filePath, { encoding: 'utf8' });
        await writeFile(filePath, processLibOptions(contents));
    }

    // Fix images in 05-ANIMATIONS.md and 09-COLOR_MAPS.md
    for (const file of ["docs/user/05-ANIMATIONS.md", "docs/user/09-COLOR_MAPS.md"]) {
        const filePath = path.join(__dirname, "..", file);
        const contents = await readFile(filePath, { encoding: 'utf8' });
        await writeFile(filePath, fixImages(contents));
    }

    // Fix links in dev
    const fullDir = path.join(__dirname, "..", "dev");
    const files = await fs.promises.readdir(fullDir);
    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(fullDir, file);
            let content = await fs.promises.readFile(filePath, 'utf-8');
            content = fixDevLinks(content);
            await fs.promises.writeFile(filePath, content, 'utf-8');
        }
    }

    // Convert GitHub-style admonitions in all markdown files
    for (const dir of ["dev", "docs/libf3d", "docs/user"]) {
        const fullDir = path.join(__dirname, "..", dir);
        const files = await fs.promises.readdir(fullDir);
        for (const file of files) {
            if (file.endsWith('.md')) {
                const filePath = path.join(fullDir, file);
                let content = await fs.promises.readFile(filePath, 'utf-8');
                content = convertGithubAdmonitions(content);
                await fs.promises.writeFile(filePath, content, 'utf-8');
            }
        }
    }
}

async function generateOptionsHeader(): Promise<void> {
    console.log("Generating options.h file...");

    const script = path.join(__dirname, "generateOptionsHeader.cmake");

    const cmakeCmd = `cmake -DF3D_SOURCE_DIR="${SOURCE_DIR}" -P ${script}`;

    try {
        await execAsync(cmakeCmd);
    } catch (error) {
        throw new Error(`Failed to run CMake: ${(error as Error).message}`);
    }
}

async function cleanup(): Promise<void> {
    console.log("Cleaning up temporary files...");
    try {
        await rm(SOURCE_DIR, { recursive: true, force: true });
        await rm(OUTPUT_DIR, { recursive: true, force: true });
        console.log("Cleanup completed");
    } catch (error) {
        console.warn("Failed to cleanup temp directory:", (error as Error).message);
    }
}

// Get tag from environment variable - throw if not set
const tag = process.env.F3D_TAG;
if (!tag) {
    console.error("❌ F3D_TAG environment variable is required");
    process.exit(1);
}

console.log(`Generating Doxygen documentation for F3D tag: ${tag}`);

(async () => {
    try {
        await fetchRepository(tag);
        await copyDocs();
        await generateOptionsHeader();
        await runDoxygen();
        console.log(`✅ Doxygen documentation generated successfully for tag ${tag}`);
    } catch (error) {
        console.error("❌ Error generating doxygen documentation:", (error as Error).message);
        process.exit(1);
    } finally {
        await cleanup();
    }
})();
