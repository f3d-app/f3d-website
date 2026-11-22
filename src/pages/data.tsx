import React from "react";
import Layout from "@theme/Layout";
import dataList from "./dataList.json";
import { Icon } from "@iconify/react";
import AssetPreviewModal from "@site/src/components/AssetPreviewModal";
import DownloadBox from "@site/src/components/DownloadBox";
import type {
  PreviewCamera,
  PreviewOptions,
} from "@site/src/utils/assetPreview";
import styles from "./data.module.css";

type AssetRecord = (typeof dataList)[number] & {
  options?: PreviewOptions;
  camera?: PreviewCamera;
};

type PreviewRequest = {
  file: string;
  title: string;
  options?: PreviewOptions;
  camera?: PreviewCamera;
};

export default function DataPage() {
  const categories = [
    { icon: "ep:picture-filled", label: "HDRI" },
    { icon: "ion:cube", label: "3D model" },
    { icon: "qlementine-icons:movie-16", label: "Animated model" },
    { icon: "icomoon-free:lab", label: "Scientific data" },
    { icon: "mdi:file-cad-box", label: "CAD" },
    { icon: "gravity-ui:dots-9", label: "Point cloud" },
  ];

  const [filters, setFilters] = React.useState<Record<string, boolean>>(
    categories.reduce((acc, c) => ({ ...acc, [c.label]: true }), {}),
  );
  const [preview, setPreview] = React.useState<PreviewRequest | null>(null);
  const assets = dataList as AssetRecord[];

  return (
    <Layout title="Download assets">
      <main className="container margin-vert--lg">
        <h1>Download assets</h1>

        <div className={styles.filterBar}>
          <div
            className={styles.filterList}
            role="group"
            aria-label="Filter categories"
          >
            {categories.map((cat) => {
              const id = `filter-${cat.label.replace(/\s+/g, "-").toLowerCase()}`;
              return (
                <label
                  key={cat.label}
                  className={styles.filterItem}
                  htmlFor={id}
                >
                  <input
                    id={id}
                    type="checkbox"
                    checked={filters[cat.label]}
                    onChange={() =>
                      setFilters((s) => ({ ...s, [cat.label]: !s[cat.label] }))
                    }
                  />
                  <Icon
                    icon={cat.icon}
                    className={styles.filterIcon}
                    aria-hidden="true"
                  />
                  <span className={styles.filterLabel}>{cat.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.dataGrid}>
          {assets
            .filter(({ icon }) => {
              if (!icon) return true;
              const match = categories.find((c) => c.icon === icon);
              if (!match) return true;
              return filters[match.label];
            })
            .map(
              ({
                file,
                title,
                description,
                icon,
                license,
                author,
                size,
                sha256,
                previewable,
                options,
                camera,
              }) => {
                // replace extension by .png
                const thumbnail = `/data/${file.replace(/\.[^/.]+$/, ".png")}`;
                const assetPath = `/data/${file}`;
                return (
                  <DownloadBox
                    key={file}
                    title={title}
                    description={description}
                    icon={icon}
                    size={`${size} MB`}
                    sha256={sha256}
                    link={assetPath}
                    isLinkPage={false}
                    license={license}
                    author={author}
                    thumbnail={thumbnail}
                    showPreview
                    onPreview={
                      previewable
                        ? () =>
                            setPreview({
                              file: assetPath,
                              title,
                              options,
                              camera,
                            })
                        : undefined
                    }
                  />
                );
              },
            )}
        </div>
        {preview && (
          <AssetPreviewModal
            key={preview.file}
            title={preview.title}
            filePath={preview.file}
            options={preview.options}
            camera={preview.camera}
            onClose={() => setPreview(null)}
          />
        )}
      </main>
    </Layout>
  );
}
