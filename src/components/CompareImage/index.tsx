import ReactCompareImage from "react-compare-image";
import styles from "./styles.module.css";

export default function CompareImage({
  description,
  leftLabel,
  rightLabel,
  leftImage,
  rightImage,
}: {
  leftImage: string;
  rightImage: string;
  leftLabel: string;
  rightLabel: string;
  description: string;
}) {
  return (
    <div className={styles.card}>
      {/*
      cannot tweak the CSS of the labels unfortunately
      https://github.com/tam315/react-compare-image/issues/39
      */}
      <ReactCompareImage
        leftImage={leftImage}
        rightImage={rightImage}
        leftImageLabel={(<span className={styles.label}>{leftLabel}</span>)}
        rightImageLabel={(<span className={styles.label}>{rightLabel}</span>)}
        sliderLineColor="var(--ifm-color-emphasis-400)"
      />
      {description && (
        <>
          <hr className={styles.divider} />
          <div className={styles.description}>{description}</div>
        </>
      )}
    </div>
  );
}
