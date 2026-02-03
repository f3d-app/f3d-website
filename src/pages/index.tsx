import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Sponsors from "@site/src/components/Sponsors";
import Heading from "@theme/Heading";
import { Icon } from "@iconify/react";
import { useColorMode } from "@docusaurus/theme-common";
import SplitBar from "../components/SplitBar";
import LogoSvg from "@site/static/logos/logo.svg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const videoSrc =
    colorMode === "dark"
      ? require("@site/static/logos/logo-animated-dark.mp4").default
      : require("@site/static/logos/logo-animated-light.mp4").default;
  return (
    <header className={`hero heroBanner`}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <LogoSvg
            id="fallbackImg"
            style={{
              maxWidth: "320px",
              width: "100%",
              height: "auto",
              display: "none",
            }}
          />
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{ maxWidth: "320px", width: "100%", height: "auto" }}
            onError={(e) => {
              (e.target as HTMLVideoElement).style.display = "none";
              document.getElementById("fallbackImg")!.style.display = "block";
            }}
          />
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.tagline}
        </Heading>
        <p className="hero__subtitle">
          Interact, generate high quality renderings, and browse quickly through
          a series of 3D models
        </p>
        <div className="container">
          <div
            className="buttons"
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              margin: "1.5rem 0",
            }}
          >
            <Link
              className={`button button--primary button--outline button--lg highlightButton`}
              to="/download"
            >
              <Icon icon="material-symbols:download-rounded" />
              Download
            </Link>
            <Link
              className="button button--primary button--outline button--lg"
              to="/viewer"
            >
              <Icon icon="material-symbols:3d-rotation-rounded" />
              Web viewer
            </Link>
          </div>
        </div>
        <div>
          F3D is free and open source software.
          <br />
          <strong>Try it now!</strong>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="F3D is a fast and minimalist 3D viewer desktop application. It is free to use, open source and cross-platform."
    >
      <HomepageHeader />
      <main>
        <SplitBar />
        <HomepageFeatures />
        <Sponsors />
        {/* Acknowledgements section */}
        <section style={{ textAlign: "center", padding: "4rem 0" }}>
          <div className="container">
            <Heading as="h1">Acknowledgements</Heading>
            <p>
              F3D was originally created by{" "}
              <a href="https://www.kitware.eu/" target="_blank">
                Kitware SAS
              </a>{" "}
              and is relying on many awesome open-source projects that make our
              work possible.
              <br />
              Special thanks to{" "}
              <a href="https://vtk.org/" target="_blank">
                VTK
              </a>
              ,{" "}
              <a href="https://dev.opencascade.org/" target="_blank">
                OCCT
              </a>
              ,{" "}
              <a href="https://www.assimp.org/" target="_blank">
                Assimp
              </a>
              ,{" "}
              <a href="http://www.alembic.io/" target="_blank">
                Alembic
              </a>
              ,{" "}
              <a href="https://google.github.io/draco/" target="_blank">
                Draco
              </a>
              ,{" "}
              <a href="https://github.com/ThatOpen/engine_web-ifc" target="_blank">
                web-ifc
              </a>
              ,{" "}
              <a href="https://openusd.org/release/index.html" target="_blank">
                OpenUSD
              </a>
              ,{" "}
              <a href="https://www.openvdb.org/" target="_blank">
                OpenVDB
              </a>
              ,{" "}
              <a href="https://www.ospray.org/" target="_blank">
                OSPRay
              </a>
              , and{" "}
              <a href="https://github.com/ocornut/imgui/" target="_blank">
                ImGui
              </a>{" "}
              — and to all contributors across the ecosystem.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
