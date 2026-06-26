import ReactCompareImage from "react-compare-image";

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
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
        border: "1px solid var(--ifm-color-emphasis-200)",
      }}
    >
      {/*
      cannot tweak the CSS of the labels unfortunately
      https://github.com/tam315/react-compare-image/issues/39
      */}
      <ReactCompareImage
        leftImage={leftImage}
        rightImage={rightImage}
        leftImageLabel={
          (<span style={{ fontSize: "0.75rem" }}>{leftLabel}</span>)
        }
        rightImageLabel={
          (<span style={{ fontSize: "0.75rem" }}>{rightLabel}</span>)
        }
        sliderLineColor="var(--ifm-color-emphasis-400)"
      />
      {description && (
        <>
          <hr style={{ margin: 0, border: ".5px solid var(--ifm-color-emphasis-200)" }} />
          <div
          style={{
            textAlign: "center",
            padding: "10px 16px 14px",
            color: "var(--ifm-color-emphasis-600)",
            fontStyle: "italic",
            fontSize: "0.8rem",
          }}
        >
          {description}
        </div>
        </>
      )}
    </div>
  );
}
