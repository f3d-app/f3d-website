import React, { useRef, ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import F3DViewer from '@site/src/components/F3DViewer';
import styles from './viewer.module.css';


function ViewerApp() {

  const viewerRef = useRef(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileNameSpan = document.getElementById('file-name');
      if (fileNameSpan) fileNameSpan.textContent = file.name;

      const reader = new FileReader();
      reader.addEventListener("loadend", (e) => {

        viewerRef.current?.loadFile(file.name, new Uint8Array(reader.result));

        /*
        progressEl.textContent = "100%";
        progressEl.value = 100;
        Module.FS.writeFile(file.name, new Uint8Array(reader.result));
        openFile(file.name);
        progressEl.parentElement.style.display = "none";
        */
      });
      reader.addEventListener("progress", (evt) => {
        /*
        console.log(evt);
        const progress = Math.floor((100 * evt.loaded) / evt.total);
        progressEl.parentElement.style.display = "block";
        progressEl.value = progress;
        progressEl.textContent = `${progress}%`;
        */
      });

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className={styles.viewerPage}>
      <div className={styles.layout}>
        <nav className={styles.menuPanel} aria-label="Viewer controls">
          <div className={styles.fileInputGroup}>
            <label className={styles.fileLabel} htmlFor="file-selector">
              <input
                className={styles.fileInput}
                type="file"
                id="file-selector"
                accept=".gml,.gltf,.glb,.obj,.ply,.pts,.stl,.vtk,.vtp,.vtu,.vtkhdf,.3ds,.wrl,.vrml,.fbx,.off,.x,.dae,.ex2,.exo,.e,.g,.stp,.step,.igs,.iges,.brep,.xbf,.drc,.mdl,.nc,.cdf,.ncdf"
                onChange={handleFileChange}
              />
              <span className={styles.fileCta}>Open a file...</span>
              <span className={styles.fileName} id="file-name"></span>
            </label>
          </div>
          <div className={styles.upDirectionGroup}>
            <button id="y-up" className={styles.upButton}>+Y</button>
            <button id="z-up" className={styles.upButtonActive}>+Z</button>
            <label className={styles.upLabel}>Up</label>
          </div>
          <div className={styles.sectionLabel}>Widgets</div>
          <div className={styles.switchField}>
            <input id="grid" type="checkbox" name="grid" className={styles.switchInput} defaultChecked />
            <label htmlFor="grid">Grid</label>
          </div>
          <div className={styles.switchField}>
            <input id="axis" type="checkbox" name="axis" className={styles.switchInput} defaultChecked />
            <label htmlFor="axis">Axis</label>
          </div>
          <div className={styles.sectionLabel}>Rendering</div>
          <div className={styles.switchField}>
            <input id="fxaa" type="checkbox" name="fxaa" className={styles.switchInput} defaultChecked />
            <label htmlFor="fxaa">Anti-aliasing</label>
          </div>
          <div className={styles.switchField}>
            <input id="tone" type="checkbox" name="tone" className={styles.switchInput} defaultChecked />
            <label htmlFor="tone">Tone mapping</label>
          </div>
          <div className={styles.switchField}>
            <input id="ssao" type="checkbox" name="ssao" className={styles.switchInput} defaultChecked />
            <label htmlFor="ssao">Ambient occlusion</label>
          </div>
          <div className={styles.sectionLabel}>Lighting</div>
          <div className={styles.switchField}>
            <input id="ambient" type="checkbox" name="ambient" className={styles.switchInput} defaultChecked />
            <label htmlFor="ambient">Ambient light</label>
          </div>
        </nav>
        <main className={styles.viewerPanel}>
          <F3DViewer ref={viewerRef} />
        </main>
      </div>
      <div className={styles.eventLog}>
        <p style={{ textAlign: 'center' }}>Loading 3D object...</p>
        <progress
          className={styles.progress}
          id="progressEl"
          value="0"
          max="100"
        >
          30%
        </progress>
      </div>
    </div>
  );
}

export default function Viewer(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="F3D website">
      <ViewerApp />
    </Layout>
  );
}
