import { mkdir, rm, cp } from "fs/promises";
import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import { fileURLToPath } from 'url';
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

// Configuration
const REPO_URL = "https://github.com/f3d-app/f3d";
const SOURCE_DIR = path.join(__dirname, "f3d-src");
const OUTPUT_DIR = path.join(__dirname, "doxygen_output");

async function fetchRepository(tag) {
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
        throw new Error(`Failed to clone repository: ${error.message}`);
    }
}

async function runDoxygen() {
    console.log("Running doxygen...");

    try {
        await rm(OUTPUT_DIR, { recursive: true, force: true });
    } catch (error) {
        // Directory might not exist, that's ok
    }

    // Ensure output directory exists
    await mkdir(OUTPUT_DIR, { recursive: true });

    const doxygenCmd = `doxygen ${__dirname}/Doxyfile`;

    try {
        const { stdout, stderr } = await execAsync(doxygenCmd, {
            maxBuffer: 1024 * 1024 * 10 // 10MB buffer for large doxygen output
        });
        
        console.log("Doxygen completed successfully");
        if (stdout) console.log("Doxygen output:", stdout);
        if (stderr) console.log("Doxygen warnings/errors:", stderr);
        
    } catch (error) {
        throw new Error(`Failed to run doxygen: ${error.message}`);
    }
}

async function runSeaborg() {
    console.log("Running seaborg...");

    const inPath = path.join(__dirname, 'doxygen_output', 'xml');
    const outPath = path.join(__dirname, '..', 'docs', 'api');

    const seaborgCmd = `seaborg ${inPath} ${outPath}`;

    try {
        const { stdout, stderr } = await execAsync(seaborgCmd);

        console.log("Seaborg completed successfully");
        if (stdout) console.log("Seaborg output:", stdout);
        if (stderr) console.log("Seaborg warnings/errors:", stderr);

    } catch (error) {
        throw new Error(`Failed to run seaborg: ${error.message}`);
    }

    // Postprocess files in ../docs/api
    console.log("Postprocessing generated markdown files...");

    // List files in outPath
    const files = await fs.promises.readdir(outPath);
    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(outPath, file);
            let content = await fs.promises.readFile(filePath, 'utf-8');

            // First apply the multi-line regex before splitting into lines
            // replace <a> elements by Markdown anchors
            content = content.replace(/<a id="([^"]+)"><\/a>\n(.+)/g, '$2 {#$1}');

            const lines = content.split('\n');
            const newLines = [];
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

                // remove file in namespace
                if (file.includes('namespace') && lines[i].startsWith("**Definition**")) {
                    continue;
                }

                newLines.push(lines[i]);
            }
            content = newLines.join('\n');
            await fs.promises.writeFile(filePath, content, 'utf-8');
            console.log(`Postprocessed ${file}`);
        }
    }

    console.log("Postprocessing completed.");
}

async function copyDocs() {
    console.log("Copying documentation...");

    try {
        // copy user and libf3d docs
        for (const dir of ["user", "libf3d"]) {
            const srcDir = path.join(SOURCE_DIR, "doc", dir);
            const destDir = path.join(__dirname, "..", "docs", dir);
            await cp(srcDir, destDir, { recursive: true });
        }

        // copy some specific files
        for (const file of ["CONTRIBUTING.md", "CODE_OF_CONDUCT.md"]) {
            const srcFile = path.join(SOURCE_DIR, file);
            const destFile = path.join(__dirname, "..", "dev", file);
            await cp(srcFile, destFile);
        }

        for (const file of ["doc/CHANGELOG.md", "LICENSE.md"]) {
            const srcFile = path.join(SOURCE_DIR, file);
            const destFile = path.join(__dirname, "..", "src", "pages", file);
            await cp(srcFile, destFile);
        }

        console.log("Documentation copied successfully");
    } catch (error) {
        throw new Error(`Failed to copy documentation: ${error.message}`);
    }
}

async function cleanup() {
    console.log("Cleaning up temporary files...");
    try {
        await rm(SOURCE_DIR, { recursive: true, force: true });
        await rm(OUTPUT_DIR, { recursive: true, force: true });
        console.log("Cleanup completed");
    } catch (error) {
        console.warn("Failed to cleanup temp directory:", error.message);
    }
}

// Get tag from environment variable - throw if not set
const tag = process.env.F3D_TAG;
if (!tag) {
    console.error("❌ F3D_TAG environment variable is required");
    process.exit(1);
}

console.log(`Generating Doxygen documentation for F3D tag: ${tag}`);

try {
    await fetchRepository(tag);
    await copyDocs();
    await runDoxygen();
    await runSeaborg();
    console.log(`✅ Doxygen documentation generated successfully for tag ${tag}`);
} catch (error) {
    console.error("❌ Error generating doxygen documentation:", error.message);
    process.exit(1);
} finally {
    await cleanup();
}
