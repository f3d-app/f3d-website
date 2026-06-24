import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Admonition from "@theme/Admonition";
import Heading from "@theme/Heading";
import React, { useRef, useEffect, useState } from "react";
import "@splidejs/react-splide/css/sea-green";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Icon } from "@iconify/react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./gallery.module.css";
import Link from "@docusaurus/Link";

function toSlug(title: string): string {   //toSlug func. converts the slide titles as has URLs
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const galleryItems = [
  {
    title: "Animated realistic rendering",
    media: (
      <video
        src={require("@site/static/images/gearbox.webm").default}
        autoPlay
        loop
        muted
        playsInline
        className={styles.media}
      />
    ),
    command:
      "f3d gearbox/scene.gltf --hdri-file=future_parking_2k.hdr --hdri-skybox --blur-background --ambient-occlusion --axis=false",
  },
  {
    title: "Animated, skinned and morphed rendering",
    media: (
      <video
        src={require("@site/static/images/dota.webm").default}
        autoPlay
        loop
        muted
        playsInline
        className={styles.media}
      />
    ),
    command:
      "f3d dota/scene.gltf --hdri-file=future_parking_2k.hdr --hdri-skybox --blur-background --ambient-occlusion",
  },
  {
    title: "Animated scientific visualization rendering",
    media: (
      <video
        src={require("@site/static/images/can.webm").default}
        autoPlay
        loop
        muted
        playsInline
        className={styles.media}
      />
    ),
    command:
      "f3d can.ex2 --up=+Z --scalar-coloring --coloring-array=VEL --animation-speed-factor=0.002",
  },
  {
    title: "3D Gaussians Splatting",
    media: (
      <video
        src={require("@site/static/images/counter.webm").default}
        autoPlay
        loop
        muted
        playsInline
        className={styles.media}
      />
    ),
    command:
      "f3d counter.splat --point-sprites-size=1 --point-sprites=gaussian --fps --up=-Y --camera-position=0,1,-5.2 --camera-focal-point=0,1,0",
  },
  {
    title: "Direct scalars rendering of a point cloud",
    media: (
      <img
        src={require("@site/static/images/directScalars.png").default}
        alt="Direct scalars rendering of a point cloud"
        className={styles.media}
      />
    ),
    command:
      "f3d Carola_PointCloud.ply --point-sprites-size=0.3 --point-sprites --hdri-skybox --blur-background --blur-coc=50 --coloring-array=RGBA --up=+Z --hdri-file=venice_sunset_8k.hdr",
  },
  {
    title: "Raytraced CAD assembly",
    media: (
      <img
        src={require("@site/static/images/cad.png").default}
        alt="Raytraced CAD assembly"
        className={styles.media}
      />
    ),
    command:
      "f3d 202.vtp --scalar-coloring --raytracing --raytracing-denoise --raytracing-samples=20 --coloring-range=-2,9",
  },
  {
    title: "Volume rendering of a security bag scan",
    media: (
      <img
        src={require("@site/static/images/volume.png").default}
        alt="Volume rendering of a security bag scan"
        className={styles.media}
      />
    ),
    command:
      "f3d backpack.vti --volume --metadata --coloring-range=300,1000 --colormap=0,#000000,1,#ffffff",
  },
  {
    title: "Realistic rendering #1",
    media: (
      <img
        src={require("@site/static/images/realisticHelmet.png").default}
        alt="Realistic rendering #1"
        className={styles.media}
      />
    ),
    command:
      "f3d DamagedHelmet.glb --hdri-file=lebombo_4k.hdr --hdri-skybox --blue-background --ambient-occlusion --grid=false --axis=false",
  },
  {
    title: "Showcase of interactive widgets",
    media: (
      <img
        src={require("@site/static/images/typical.png").default}
        alt="Showcase of interactive widgets"
        className={styles.media}
      />
    ),
    command:
      "f3d dragon.vtu --scalar-coloring --edges --metadata --coloring-component=0",
  },
  {
    title: "Metallic Rendering of a STEP file",
    media: (
      <img
        src={require("@site/static/images/step.png").default}
        alt="Metallic Rendering of a STEP file"
        className={styles.media}
      />
    ),
    command:
      "f3d eta_asm.stp --hdri-file=future_parking_2k.hdr -DSTEP.linear_deflection=0.01 --hdri-skybox --blur-background --ambient-occlusion --up=+Z --metallic=1 --roughness=0.6 --color=0.98,0.90,0.59 --scalar-coloring=false",
  },
  {
    title: "Rendering of a FBX file",
    media: (
      <img
        src={require("@site/static/images/fbx.png").default}
        alt="Rendering of a FBX file"
        className={styles.media}
      />
    ),
    command:
      "f3d zelda/source/zeldaPosed001.fbx --hdri-file=hikers_cave_2k.hdr --hdri-skybox --blur-background --ambient-occlusion --light-intensity=1.5 --blur-coc=50",
  },
  {
    title: "Realistic rendering #2",
    media: (
      <img
        src={require("@site/static/images/realisticMask.png").default}
        alt="Realistic rendering #2"
        className={styles.media}
      />
    ),
    command:
      "f3d FlightHelmet.glb --hdri-file=lebombo_4k.hdr --hdri-skybox --blur-background --ambient-occlusion --axis=false --grid=false",
  },
  {
    title: "Visualization of a CFD velocity field",
    media: (
      <img
        src={require("@site/static/images/cfd.png").default}
        alt="Visualization of a CFD velocity field"
        className={styles.media}
      />
    ),
    command:
      "f3d single-pin.vtp --coloring-scalar-bar --scalar-coloring --coloring-range=-2,8 --colormap=0,0.3,0.7,0,0.7,0,0.1,1,1,0.8,0.8,0",
  },
  {
    title: "Volume rendering of a medical skull scan",
    media: (
      <img
        src={require("@site/static/images/volumeMedical.png").default}
        alt="Volume rendering of a medical skull scan"
        className={styles.media}
      />
    ),
    command:
      "f3d skull.vti --volume --coloring-scalar-bar --coloring-range=40,200 --camera-direction=1,0,0 --up=+Z",
  },
  {
    title: "Point cloud rendering using sprites",
    media: (
      <img
        src={require("@site/static/images/pointCloud.png").default}
        alt="Point cloud rendering using sprites"
        className={styles.media}
      />
    ),
    command:
      "f3d pointCloud.vtp -o --point-sprites-size=0.2 --colormap=0,0,0.8,0,0.4,0.9,0,0,0.8,0.9,0.9,0,1,0.5,0.5,1 --up=+Z",
  },
];

export default function Gallery(): ReactNode {

  const { siteConfig } = useDocusaurusContext();
  const splideRef = useRef<{ splide: { go: (index: number) => void } } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);       // null -> closed | number -> which item is enlarged | the counter for that entry

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash || !splideRef.current) return;
    const index = galleryItems.findIndex((item) => toSlug(item.title) === hash);
    if (index !== -1) {
      splideRef.current.splide.go(index);
    }
  }, []);

  useEffect(() => {               
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <Layout
      title="Gallery"
      description="Gallery showcasing renderings and associated command lines."
    >
      <div className="container">
        <Heading as="h1">Gallery</Heading>
        <p>Examples of renderings with their associated command lines.</p>
      </div>
      <div className="container">
        <Splide
          className={styles.gallerySplide}
          ref={splideRef}               // updates the window.location.hash when slide is moved 
          onMoved={(_splide, newIndex) => {
            window.location.hash = toSlug(galleryItems[newIndex].title);
          }}
          options={{
            type: "loop",
            perPage: 1,
            gap: "2rem",
            autoplay: false,     // Stops the automatic rotating, no need on pauseOnHover is autoplay is disabled
            pagination: true,
            arrows: true,
          }}
        >
          {galleryItems.map((item, idx) => (
            <SplideSlide key={idx}>
              <section style={{ textAlign: "center" }}>
                <Heading as="h2">{item.title}</Heading>
                <div
                  style={{ marginBottom: "1em" }}
                  className={styles.mediaWrapper}
                  onClick={() => setLightboxIndex(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${item.title} in full size`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setLightboxIndex(idx);
                  }}
                >
                  {item.media}
                  <button
                    type="button"
                    className={styles.expandButton}
                    aria-label={`Expand ${item.title}`}
                    tabIndex={-1}
                  >
                    <Icon icon="material-symbols:open-in-full" />
                  </button>
                </div>
                <CodeBlock>{item.command}</CodeBlock>
              </section>
            </SplideSlide>
          ))}
        </Splide>
        <section>
          <Heading as="h2">Acknowledgments</Heading>
          <Admonition type="note">
            Images and videos displayed below use public datasets, you can
            download them <Link to="/data">here</Link>. The provided commands
            assume a standard configuration file is present in your F3D
            installation.
          </Admonition>
          <ul>
            <li>
              Bristleback DOTA Fan-Art by{" "}
              <a href="https://sketchfab.com/Tolst">Nikolay_Tsys</a>
            </li>
            <li>
              SY Carola (point cloud) by{" "}
              <a href="https://sketchfab.com/ScottishMaritimeMuseum">
                Scottish Maritime Museum
              </a>
            </li>
            <li>
              Gearbox Animation by{" "}
              <a href="https://sketchfab.com/dzhusione">DZHUSI ØNE</a>
            </li>
            <li>
              Watch movement by{" "}
              <a href="https://grabcad.com/greg.brown">Greg Brown</a>
            </li>
            <li>
              Zelda - Breath Of The Wild by{" "}
              <a href="https://sketchfab.com/theStoff">theStoff</a>
            </li>
            <li>
              Venice Sunset HDRI and Hiker’s Cave HDRI by{" "}
              <a href="https://polyhaven.com/hdris?a=Greg%20Zaal">Greg Zaal</a>
            </li>
            <li>
              Future Parking HDRI by{" "}
              <a href="https://polyhaven.com/hdris?a=Sergej%20Majboroda">
                Sergej Majboroda
              </a>
            </li>
          </ul>
        </section>
      </div>
      {lightboxIndex !== null && (
        <div
          className={styles.lightboxBackdrop}
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={galleryItems[lightboxIndex].title}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <Icon icon="material-symbols:close" />
            </button>
            {React.cloneElement(
              galleryItems[lightboxIndex].media as React.ReactElement<{ className: string }>,
              { className: styles.lightboxMedia }
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
