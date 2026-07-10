import type { ReactNode, ComponentType, SVGProps } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { Icon } from "@iconify/react";
import styles from "./brand.module.css";
import LogoSvg from "@site/static/logos/logo.svg";
import LogoMonoSvg from "@site/static/logos/logo-mono.svg";
import HexLogoSvg from "@site/static/logos/f3d-hex-logo.svg";
import HexLogoSmallSvg from "@site/static/logos/f3d-hex-logo-small.svg";

const colors = [
  { name: "Black", hex: "#141414" },
  { name: "White", hex: "#F4F4F4" },
  { name: "Blue", hex: "#788BFF" },
  { name: "Yellow", hex: "#F9B208" },
  { name: "Red", hex: "#F94306" },
  { name: "Green", hex: "#7AFF7A" },
];

type LogoVariant = {
  label: string;
  Component: ComponentType<SVGProps<SVGSVGElement>>;
  downloads: string;
};

const logos: LogoVariant[] = [
  {
    label: "Logo",
    Component: LogoSvg,
    downloads: "/logos/logo.svg",
  },
  {
    label: "Logo (mono)",
    Component: LogoMonoSvg,
    downloads: "/logos/logo-mono.svg",
  },
  {
    label: "Hex logo (NGI Zero)",
    Component: HexLogoSvg,
    downloads: "/logos/f3d-hex-logo.svg",
  },
  {
    label: "Hex logo (small)",
    Component: HexLogoSmallSvg,
    downloads: "/logos/f3d-hex-logo-small.svg",
  },
];

function LogoCard({ variant }: { variant: LogoVariant }) {
  const { Component } = variant;
  return (
    <div className={styles.logoCard}>
      <div className={styles.logoPreview}>
        <Component aria-label={variant.label} />
      </div>
      <div className={styles.logoCardFooter}>
        <p className={styles.logoCardLabel}>{variant.label}</p>
        <div className={styles.downloadLinks}>
          <a
            key={variant.label}
            href={variant.downloads}
            download
            className={styles.downloadLink}
          >
            <Icon icon="material-symbols:download-rounded" />
            SVG
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BrandPage(): ReactNode {
  return (
    <Layout
      title="Brand"
      description="Official F3D brand resources: logos, color palette."
    >
      <main className="container margin-vert--lg">
        {/* Logos */}
        <section className={styles.section}>
          <Heading as="h1" className={styles.sectionTitle}>
            Logo
          </Heading>
          <p className={styles.sectionDescription}>
            The F3D logos are licensed under{" "}
            <a href="https://creativecommons.org/licenses/by-nd/4.0/">
              CC BY-ND 4.0
            </a>
            . Do not alter the logo proportions or colors.
          </p>
          <div className={styles.logoGrid}>
            {logos.map((v) => (
              <LogoCard key={v.label} variant={v} />
            ))}
          </div>
        </section>

        {/* Color palette */}
        <section className={styles.section}>
          <Heading as="h1" className={styles.sectionTitle}>
            Color Palette
          </Heading>
          <p className={styles.sectionDescription}>
            These are the official F3D brand colors. Blue is the primary accent
            color. Yellow, Red, and Green are secondary accents.
          </p>
          <div className={styles.colorGrid}>
            {colors.map((c) => (
              <div className={styles.colorCard} key={c.hex}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: c.hex }}
                />
                <div className={styles.colorCardBody}>
                  <p className={styles.colorName}>{c.name}</p>
                  <p className={styles.colorHex}>{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
