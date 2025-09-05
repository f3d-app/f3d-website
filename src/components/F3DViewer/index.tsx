import React, { ReactNode, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import f3d from "f3d";
import styles from "./styles.module.css";

function initViewer(moduleRef) {
  f3d({ canvas: document.getElementById("canvas") })
    .then(async (Module) => {

      moduleRef.current = Module;

      // write in the filesystem
      const defaultFile = await fetch("data/f3d.vtp").then((b) =>
        b.arrayBuffer()
      );
      Module.FS.writeFile("f3d.vtp", new Uint8Array(defaultFile));

      // automatically load all supported file format readers
      Module.Engine.autoloadPlugins();

      Module.engineInstance = Module.Engine.create();

      // background must be set to black for proper blending with transparent canvas
      Module.engineInstance.getOptions().set_color("render.background.color", 0, 0, 0);

      // setup coloring
      Module.engineInstance.getOptions().toggle("model.scivis.enable");
      Module.engineInstance.getOptions().set_string("model.scivis.array_name", "Colors");
      Module.engineInstance.getOptions().set_integer("model.scivis.component", -2);
      Module.engineInstance.getOptions().toggle("model.scivis.cells");

      // make it look nice
      Module.engineInstance.getOptions().toggle("render.effect.antialiasing.enable");
      Module.engineInstance.getOptions().toggle("render.effect.tone_mapping");
      Module.engineInstance.getOptions().toggle("render.effect.ambient_occlusion");
      Module.engineInstance.getOptions().toggle("render.hdri.ambient");

      // display widgets
      Module.engineInstance.getOptions().toggle("ui.axis");
      Module.engineInstance.getOptions().toggle("render.grid.enable");

      // default to +Z
      Module.engineInstance.getOptions().set_as_string("scene.up_direction", "+Z");

      // setup the window size based on the canvas size
      const scale = window.devicePixelRatio;
      Module.engineInstance
        .getWindow()
        .setSize(
          scale * Module.canvas.clientWidth,
          scale * Module.canvas.clientHeight
        );

      // load file
      const scene = Module.engineInstance.getScene();
      if (scene.supports("f3d.vtp")) {
        scene.clear();
        scene.add("f3d.vtp");
      } else {
        console.error("File " + "f3d.vtp" + " cannot be opened");
      }
      Module.engineInstance.getWindow().resetCamera();
      Module.engineInstance.getWindow().render();

      // do a first render and start the interactor
      Module.engineInstance.getWindow().render();
      Module.engineInstance.getInteractor().start();
    })
    .catch((error) => console.error("Internal exception: " + error));
}

const F3DViewer = forwardRef((props, ref) => {
  const moduleRef = useRef(null);

  useImperativeHandle(ref, () => ({

    loadFile: (file, buffer) => {

      // add to FS
      moduleRef.current.FS.writeFile(file, buffer);

      const scene = moduleRef.current.engineInstance.getScene();
      if (scene.supports(file)) {
        scene.clear();
        scene.add(file);
      } else {
        console.error("File " + file + " cannot be opened");
      }
      moduleRef.current.engineInstance.getWindow().resetCamera();
      moduleRef.current.engineInstance.getWindow().render();
    }

  }));

  useEffect(() => {
    initViewer(moduleRef);
  }, []);

  return (
    <div className={styles.viewer}>
      <canvas id="canvas"></canvas>
    </div>
  );
});

export default F3DViewer;
