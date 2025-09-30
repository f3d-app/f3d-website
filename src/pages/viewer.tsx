import React, { useRef, useState, ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import F3DViewer from '@site/src/components/F3DViewer';
import { Icon } from '@iconify/react';
import styles from './viewer.module.css';


function ViewerApp() {
  const viewerRef = useRef(null);
  const [upDirection, setUpDirection] = useState('+Z');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Callback for switch toggles
  const handleSwitchToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    const idOptionMappings = {
      "grid": "render.grid.enable",
      "axis": "ui.axis",
      "fxaa": "render.effect.antialiasing.enable",
      "tone": "render.effect.tone_mapping",
      "ssao": "render.effect.ambient_occlusion",
      "ambient": "render.hdri.ambient",
    };

    viewerRef.current?.toggleOption?.(idOptionMappings[name]);
  };

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

  // Callback for up direction buttons
  const handleUpDirection = (direction: '+Y' | '+Z') => {
    setUpDirection(direction);
    viewerRef.current?.setUpDirection?.(direction);
    // Optionally, update button styles here if you want to reflect active state
    console.log('Set up direction:', direction);
  };

  return (
    <div className={styles.viewerPage}>
      <div 
        className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.mobileMenuToggleHidden : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle controls panel"
        title="Controls"
      >
        <Icon icon="material-symbols:settings" />
      </div>
      
      <div className={styles.layout}>
        <nav className={`${styles.menuPanel} ${isMobileMenuOpen ? styles.menuPanelOpen : ''}`} aria-label="Viewer controls">
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
                accept=".gml,.gltf,.glb,.obj,.ply,.pts,.stl,.vtk,.vtp,.vtu,.vtkhdf,.3ds,.wrl,.vrml,.fbx,.off,.x,.dae,.ex2,.exo,.e,.g,.stp,.step,.igs,.iges,.brep,.xbf,.drc,.mdl,.nc,.cdf,.ncdf"
                onChange={handleFileChange}
              />
              <span className="button button--primary button--lg">Open a file...</span>
              <span className={styles.fileName} id="file-name">f3d.vtp</span>
            </label>
          </div>
          <div className={styles.upDirectionGroup}>
            <button
              id="y-up"
              className={upDirection === '+Y' ? styles.upButtonActive : styles.upButton}
              type="button"
              onClick={() => handleUpDirection('+Y')}
            >
              +Y
            </button>
            <button
              id="z-up"
              className={upDirection === '+Z' ? styles.upButtonActive : styles.upButton}
              type="button"
              onClick={() => handleUpDirection('+Z')}
            >
              +Z
            </button>
            <label className={styles.upLabel}>Up</label>
          </div>
          <div className={styles.sectionLabel}>Widgets</div>
          <div className={styles.switchField}>
            <input id="grid" type="checkbox" name="grid" className={styles.switchInput} defaultChecked onChange={handleSwitchToggle} />
            <label htmlFor="grid">Grid</label>
          </div>
          <div className={styles.switchField}>
            <input id="axis" type="checkbox" name="axis" className={styles.switchInput} defaultChecked onChange={handleSwitchToggle} />
            <label htmlFor="axis">Axis</label>
          </div>
          <div className={styles.sectionLabel}>Rendering</div>
          <div className={styles.switchField}>
            <input id="fxaa" type="checkbox" name="fxaa" className={styles.switchInput} defaultChecked onChange={handleSwitchToggle} />
            <label htmlFor="fxaa">Anti-aliasing</label>
          </div>
          <div className={styles.switchField}>
            <input id="tone" type="checkbox" name="tone" className={styles.switchInput} defaultChecked onChange={handleSwitchToggle} />
            <label htmlFor="tone">Tone mapping</label>
          </div>
          <div className={styles.switchField}>
            <input id="ssao" type="checkbox" name="ssao" className={styles.switchInput} defaultChecked onChange={handleSwitchToggle} />
            <label htmlFor="ssao">Ambient occlusion</label>
          </div>
          <div className={styles.sectionLabel}>Lighting</div>
          <div className={styles.switchField}>
            <input id="ambient" type="checkbox" name="ambient" className={styles.switchInput} defaultChecked onChange={handleSwitchToggle} />
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
