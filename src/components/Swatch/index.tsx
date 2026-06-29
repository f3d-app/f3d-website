import React from "react";
import styles from "./styles.module.css";

type Props = {
  color: string;
  size?: number;
};

export default function Swatch({ color, size = 28 }: Props) {

  const cssVars: React.CSSProperties = {
    ["--swatch-color" as any]: color,
    ["--swatch-size" as any]: `${size}px`,
  };

  return (
    <span aria-hidden className={styles.wrapper} style={cssVars}>
      <span className={styles.box} />
    </span>
  );
}
