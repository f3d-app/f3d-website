import type { ReactNode } from "react";
import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";
import Link from "@docusaurus/Link";
import { useState } from "react";
import styles from "./styles.module.css";

export type DownloadRecommendationsProps = {
  operatingSystem: string | null;
  links: Record<
    string,
    {
      tag: string;
      date: Date;
      assets: Object;
    }
  >;
};

export default function DownloadRecommendations({
  operatingSystem,
  links,
}: DownloadRecommendationsProps): ReactNode {
  if (operatingSystem == null) return null;

  const osLinks = links.assets[operatingSystem];
  if (osLinks == null || osLinks.binaries.length < 2) return null;

  // State for copy button feedback
  const [copied0, setCopied0] = useState(false);
  const [copied1, setCopied1] = useState(false);

  const handleCopy = (text: string, buttonIndex: number) => {
    navigator.clipboard.writeText(text);
    if (buttonIndex === 0) {
      setCopied0(true);
      setTimeout(() => setCopied0(false), 2000);
    } else {
      setCopied1(true);
      setTimeout(() => setCopied1(false), 2000);
    }
  };

  return (
    <section>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.downloadOption}>
            <Link
              className={`button button--primary button--lg ${styles.downloadButton}`}
              to={`/thanks?download=${encodeURIComponent(osLinks.binaries[0].url)}`}
            >
              Download <b>F3D</b>
              <br />
              <small>
                <Icon icon={osLinks.icon} className={styles.buttonIcon} />
                <b>{operatingSystem}</b> ({osLinks.binaries[0].short})
              </small>
            </Link>
            <ul className={styles.details}>
              <li>{osLinks.binaries[0].long}</li>
              <li>
                {osLinks.binaries[0].size} -{" "}
                <a data-tooltip-id="digest0" className={styles.digestLink}>
                  sha256
                </a>
              </li>
              <Tooltip
                id="digest0"
                clickable={true}
                positionStrategy="fixed"
                place="bottom"
              >
                <div className={styles.tooltipContent}>
                  <span>
                    {osLinks.binaries[0].digest.replace("sha256:", "")}
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        osLinks.binaries[0].digest.replace("sha256:", ""),
                        0,
                      )
                    }
                    className={styles.copyButton}
                    title={copied0 ? "Copied!" : "Copy to clipboard"}
                  >
                    <Icon
                      icon={
                        copied0
                          ? "material-symbols:check"
                          : "material-symbols:content-copy"
                      }
                      className={`${styles.copyIcon} ${copied0 ? styles.copyIconCopied : styles.copyIconDefault}`}
                    />
                  </button>
                </div>
              </Tooltip>
            </ul>
          </div>
          <div className={styles.downloadOption}>
            <Link
              className={`button button--primary button--outline button--lg ${styles.downloadButton}`}
              to={`/thanks?download=${encodeURIComponent(osLinks.binaries[1].url)}`}
            >
              Download <b>F3D</b>
              <br />
              <small>
                <Icon icon={osLinks.icon} className={styles.buttonIcon} />
                <b>{operatingSystem}</b> ({osLinks.binaries[1].short})
              </small>
            </Link>
            <ul className={styles.details}>
              <li>{osLinks.binaries[1].long}</li>
              <li>
                {osLinks.binaries[1].size} -{" "}
                <a data-tooltip-id="digest1" className={styles.digestLink}>
                  sha256
                </a>
              </li>
              <Tooltip
                id="digest1"
                clickable={true}
                positionStrategy="fixed"
                place="bottom"
              >
                <div className={styles.tooltipContent}>
                  <span>
                    {osLinks.binaries[1].digest.replace("sha256:", "")}
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        osLinks.binaries[1].digest.replace("sha256:", ""),
                        1,
                      )
                    }
                    className={styles.copyButton}
                    title={copied1 ? "Copied!" : "Copy to clipboard"}
                  >
                    <Icon
                      icon={
                        copied1
                          ? "material-symbols:check"
                          : "material-symbols:content-copy"
                      }
                      className={`${styles.copyIcon} ${copied1 ? styles.copyIconCopied : styles.copyIconDefault}`}
                    />
                  </button>
                </div>
              </Tooltip>
            </ul>
          </div>
        </div>
        <div className={styles.footer}>
          or see other available versions below
        </div>
      </div>
    </section>
  );
}
