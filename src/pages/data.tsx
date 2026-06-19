import React from "react";
import Layout from "@theme/Layout";
import dataList from "./dataList.json";
import { Icon } from "@iconify/react";
import DownloadBox from "@site/src/components/DownloadBox";
import styles from "./data.module.css";

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
          {dataList
            .filter(({ icon }) => {
              if (!icon) return true;
              // Find a matching category by icon identifier or by label
              const match = categories.find(
                (c) => c.icon === icon || c.label === icon,
              );
              if (!match) return true;
              return Boolean(filters[match.label]);
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
              }) => {
                // replace extension by .png
                const thumbnail = file.replace(/\.[^/.]+$/, ".png");
                return (
                  <DownloadBox
                    key={file}
                    title={title}
                    description={description}
                    icon={icon}
                    size={`${size} MB`}
                    sha256={sha256}
                    link={`/data/${file}`}
                    isLinkPage={false}
                    license={license}
                    author={author}
                    thumbnail={thumbnail}
                  />
                );
              },
            )}
        </div>
      </main>
    </Layout>
  );
}
