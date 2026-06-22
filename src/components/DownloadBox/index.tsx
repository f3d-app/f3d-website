import type { ReactNode } from "react";
import { useId } from "react";
import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";
import Link from "@docusaurus/Link";
import { useState } from "react";
import styles from "./styles.module.css";

export type DownloadBoxProps = {
  title: string;
  description: string;
  icon: string;
  size: string;
  sha256: string;
  link: string;
  isLinkPage: boolean;
  license?: string;
  author?: string;
  thumbnail?: string;
};

export default function DownloadBox({
  title,
  description,
  icon,
  size,
  sha256,
  link,
  isLinkPage,
  license,
  author,
  thumbnail,
}: DownloadBoxProps): ReactNode {
  const [copied, setCopied] = useState<boolean>(false);

  const tooltipShaId = useId();
  const tooltipLicenseId = useId();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={styles.downloadCard}>
      <div className={styles.downloadHeader}>
        <div className={styles.downloadInfo}>
          <Icon icon={icon} className={styles.downloadIcon} />
          <div className={styles.downloadDetails}>
            <h4 className={styles.downloadTitle}>{title}</h4>
            <span className={styles.downloadDescription}>{description}</span>
            <div className={styles.downloadMeta}>
              {license && (
                <>
                  <a
                    data-tooltip-id={tooltipLicenseId}
                    className={styles.tooltipLink}
                  >
                    {license}
                  </a>
                  {" · "}
                  <Tooltip
                    id={tooltipLicenseId}
                    clickable={true}
                    positionStrategy="fixed"
                    place="bottom"
                    style={{ zIndex: 999999 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span>
                        {license}
                        {author && <span> by {author}</span>}
                      </span>
                    </div>
                  </Tooltip>
                </>
              )}
              {size}
              {" · "}
              <a data-tooltip-id={tooltipShaId} className={styles.tooltipLink}>
                sha256
              </a>
            </div>
            <Tooltip
              id={tooltipShaId}
              clickable={true}
              positionStrategy="fixed"
              place="bottom"
              style={{ zIndex: 999999 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span>{sha256}</span>
                <button
                  onClick={() => handleCopy(sha256)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  title={copied ? "Copied!" : "Copy to clipboard"}
                >
                  <Icon
                    icon={
                      copied
                        ? "material-symbols:check"
                        : "material-symbols:content-copy"
                    }
                    style={{
                      fontSize: "14px",
                      color: copied
                        ? "var(--accent-yellow)"
                        : "var(--accent-blue)",
                      transition: "color 0.2s ease",
                    }}
                  />
                </button>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>

      {thumbnail && (
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className={styles.downloadThumbnail}
        />
      )}

      {isLinkPage && (
        <Link to={link} className={styles.downloadButton}>
          <Icon
            icon="material-symbols:download-rounded"
            className={styles.downloadIcon}
          />
          Download
        </Link>
      )}

      {!isLinkPage && (
        <a href={link} className={styles.downloadButton} download>
          <Icon
            icon="material-symbols:download-rounded"
            className={styles.downloadIcon}
          />
          Download
        </a>
      )}
    </div>
  );
}
