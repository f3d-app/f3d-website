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
    <div>
      <ReactCompareImage
        leftImage={leftImage}
        rightImage={rightImage}
        leftImageLabel={leftLabel}
        rightImageLabel={rightLabel}
      />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {description}
      </div>
    </div>
  );
}
