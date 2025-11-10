import type { ReactNode } from "react";
import Logo from "@site/static/logos/logo-mono.svg";

export default function SplitBar(): ReactNode {
  return (
    <div className="container">
      <div
        style={{
          position: "relative",
          textAlign: "center",
          margin: "3rem 8rem",
        }}
      >
        <hr />
        <span
          style={{
            position: "absolute",
            width: "200px",
            transform: "translate(-55%, -90%)",
            background: "var(--ifm-background-color)",
            display: "inline-block",
          }}
        >
          <Logo
            style={{
              height: "48px",
              color: "var(--ifm-hr-background-color)",
              fill: "var(--ifm-hr-background-color)",
            }}
          />
        </span>
      </div>
    </div>
  );
}
