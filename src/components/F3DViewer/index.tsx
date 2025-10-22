import React, { ReactNode, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import f3d from "f3d";
import styles from "./styles.module.css";

function initViewer(moduleRef, fileUrl) {
  f3d({ canvas: document.getElementById("canvas") })
    .then(async (Module) => {

      moduleRef.current = Module;

      // write in the filesystem
      const defaultFile = await fetch(fileUrl).then((b) =>
        b.arrayBuffer()
      );

      const modelName = fileUrl.split("/").pop();

      Module.FS.writeFile(modelName, new Uint8Array(defaultFile));

      // automatically load all supported file format readers
      Module.Engine.autoloadPlugins();

      Module.engineInstance = Module.Engine.create();

      // background must be set to black for proper blending with transparent canvas
      Module.engineInstance.getOptions().setAsString("render.background.color", "#000000");

      // setup coloring
      Module.engineInstance.getOptions().toggle("model.scivis.enable");
      Module.engineInstance.getOptions().setAsString("model.scivis.array_name", "Colors");
      Module.engineInstance.getOptions().setAsString("model.scivis.component", "-2");
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
      Module.engineInstance.getOptions().setAsString("scene.up_direction", "+Z");

      // setup the window size based on the canvas size
      const scale = window.devicePixelRatio;
      Module.engineInstance
        .getWindow()
        .setSize(
          scale * Module.canvas.clientWidth,
          scale * Module.canvas.clientHeight
        );

      // load file
      openFile(moduleRef, modelName);

      Module.engineInstance.getInteractor().start();
    })
    .catch((error) => console.error("Internal exception: " + error));
}

function openFile(moduleRef, file) {
  const scene = moduleRef.current.engineInstance.getScene();
  if (scene.supports(file)) {
    scene.clear();
    scene.add(file);
  } else {
    console.error("File " + file + " cannot be opened");
  }
  moduleRef.current.engineInstance.getWindow().getCamera().resetToBounds(0.9);
  moduleRef.current.engineInstance.getWindow().render();
  moduleRef.current.currentFile = file;
}

interface F3DViewerProps {
  fileUrl: string;
}

const F3DViewer = forwardRef<any, F3DViewerProps>(({ fileUrl }, ref) => {
  const moduleRef = useRef(null);
  useImperativeHandle(ref, () => ({

    loadFile: (file, buffer) => {
      // add to FS
      moduleRef.current.FS.writeFile(file, buffer);
      openFile(moduleRef, file);
    },
    setUpDirection: (direction) => {
      if (!moduleRef.current) return;
      // Set up direction in the engine options
      moduleRef.current.engineInstance.getOptions().setAsString("scene.up_direction", direction);
      openFile(moduleRef, moduleRef.current.currentFile);
    },
    toggleOption: (option) => {
      if (!moduleRef.current) return;
      moduleRef.current.engineInstance.getOptions().toggle(option);
      moduleRef.current.engineInstance.getWindow().render();
    }
  }));

  useEffect(() => {
    initViewer(moduleRef, fileUrl); // Pass fileUrl to initViewer
  }, [fileUrl]);

  return (
    <div className={styles.viewer}>
      <canvas id="canvas"></canvas>
    </div>
  );
});

export default F3DViewer;
