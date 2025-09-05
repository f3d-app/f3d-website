import React, { ReactNode, useEffect, useRef } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import f3d from "f3d";
import styles from "./styles.module.css";

function initViewer(engineInstanceRef) {
  f3d({ canvas: document.getElementById("canvas") })
    .then(async (Module) => {

      // write in the filesystem
      const defaultFile = await fetch("data/f3d.vtp").then((b) =>
        b.arrayBuffer()
      );
      Module.FS.writeFile("f3d.vtp", new Uint8Array(defaultFile));

      // automatically load all supported file format readers
      Module.Engine.autoloadPlugins();

      const engineInstance = Module.Engine.create();
      engineInstanceRef.current = engineInstance;

      // background must be set to black for proper blending with transparent canvas
      engineInstance.getOptions().set_color("render.background.color", 0, 0, 0);

      // setup coloring
      engineInstance.getOptions().toggle("model.scivis.enable");
      engineInstance.getOptions().set_string("model.scivis.array_name", "Colors");
      engineInstance.getOptions().set_integer("model.scivis.component", -2);
      engineInstance.getOptions().toggle("model.scivis.cells");

      // make it look nice
      engineInstance.getOptions().toggle("render.effect.antialiasing.enable");
      engineInstance.getOptions().toggle("render.effect.tone_mapping");
      engineInstance.getOptions().toggle("render.effect.ambient_occlusion");
      engineInstance.getOptions().toggle("render.hdri.ambient");

      // display widgets
      engineInstance.getOptions().toggle("ui.axis");
      engineInstance.getOptions().toggle("render.grid.enable");

      // default to +Z
      engineInstance.getOptions().set_as_string("scene.up_direction", "+Z");

      // setup the window size based on the canvas size
      const scale = window.devicePixelRatio;
      engineInstance
        .getWindow()
        .setSize(
          scale * Module.canvas.clientWidth,
          scale * Module.canvas.clientHeight
        );

      // load file
      const scene = engineInstance.getScene();
      if (scene.supports("f3d.vtp")) {
        scene.clear();
        scene.add("f3d.vtp");
      } else {
        console.error("File " + "f3d.vtp" + " cannot be opened");
      }
      engineInstance.getWindow().resetCamera();
      engineInstance.getWindow().render();

      // do a first render and start the interactor
      engineInstance.getWindow().render();
      engineInstance.getInteractor().start();
    })
    .catch((error) => console.error("Internal exception: " + error));
}

export default function F3DViewer(): ReactNode {
  const engineInstanceRef = useRef(null);
  useEffect(() => {
    initViewer(engineInstanceRef);
  }, []);

  return (
    <div className={styles.viewer}>
      <canvas id="canvas"></canvas>
    </div>
  );
}
