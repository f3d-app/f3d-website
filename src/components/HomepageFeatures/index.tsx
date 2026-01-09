import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="text--center">
              <img
                src={require("@site/static/images/realisticMask.png").default}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Realistic rendering</Heading>
              <p>
                Render your assets with realistic lighting and materials, for a
                nice previews of your 3D models.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <video
                src={require("@site/static/images/dota.webm").default}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Animations</Heading>
              <p>
                Show animations, with GPU accelerated skinning for a smooth and
                efficient playback of complex character rigs.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <img
                src={require("@site/static/images/step.png").default}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">CAD</Heading>
              <p>
                Render CAD designs, allowing you to view and inspect engineering
                models.
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2.5rem" }}></div>
        <div className="row">
          <div className="col col--4">
            <div className="text--center">
              <video
                src={require("@site/static/images/counter.webm").default}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Gaussian Splatting</Heading>
              <p>
                Efficiently render gaussian splatting scenes, enabling
                high-performance visualization of real world scans.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <img
                src={require("@site/static/images/volumeMedical.png").default}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Volume Rendering</Heading>
              <p>
                Perform advanced volume rendering, so you can visualize complex
                volumetric datasets such as medical scans and scientific
                simulations.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <img
                src={require("@site/static/images/cfd.png").default}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Scientific Visualization</Heading>
              <p>
                Color your data to create accurate scientific visualizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
