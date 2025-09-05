import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import F3DViewer from '@site/src/components/F3DViewer';
import styles from './viewer.module.css';

function ViewerApp() {
  return (
    <div id="app">
      <section className="section">
        <div className="columns">
          <aside className="menu">
            <div className="file has-name">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  id="file-selector"
                  accept=".gml,.gltf,.glb,.obj,.ply,.pts,.stl,.vtk,.vtp,.vtu,.vtkhdf,.3ds,.wrl,.vrml,.fbx,.off,.x,.dae,.ex2,.exo,.e,.g,.stp,.step,.igs,.iges,.brep,.xbf,.drc,.mdl,.nc,.cdf,.ncdf"
                />
                <span className="file-cta">
                  <span className="file-label">Open a file...</span>
                </span>
                <span className="file-name" id="file-name"></span>
              </label>
            </div>
            <div className="is-flex is-flex-direction-row is-align-items-center">
              <button id="y-up" className="button mx-1 is-small">+Y</button>
              <button id="z-up" className="button mx-1 is-small is-active">
                +Z
              </button>
              <label className="mx-1">Up</label>
            </div>
            <p className="menu-label">Widgets</p>
            <div className="field">
              <input
                id="grid"
                type="checkbox"
                name="grid"
                className="switch is-rounded"
                checked
              />
              <label htmlFor="grid">Grid</label>
            </div>
            <div className="field">
              <input
                id="axis"
                type="checkbox"
                name="axis"
                className="switch is-rounded"
                checked
              />
              <label htmlFor="axis">Axis</label>
            </div>
            <p className="menu-label">Rendering</p>
            <div className="field">
              <input
                id="fxaa"
                type="checkbox"
                name="fxaa"
                className="switch is-rounded"
                checked
              />
              <label htmlFor="fxaa">Anti-aliasing</label>
            </div>
            <div className="field">
              <input
                id="tone"
                type="checkbox"
                name="tone"
                className="switch is-rounded"
                checked
              />
              <label htmlFor="tone">Tone mapping</label>
            </div>
            <div className="field">
              <input
                id="ssao"
                type="checkbox"
                name="ssao"
                className="switch is-rounded"
                checked
              />
              <label htmlFor="ssao">Ambient occlusion</label>
            </div>
            <p className="menu-label">Lighting</p>
            <div className="field">
              <input
                id="ambient"
                type="checkbox"
                name="ambient"
                className="switch is-rounded"
                checked
              />
              <label htmlFor="ambient">Ambient light</label>
            </div>
          </aside>
          <F3DViewer />
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
      </section>
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
