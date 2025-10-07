import ColorBox from "./ColorBox";
export default function ColorBoxContainer({ colors }) {
  return (
    <div className="ColorBoxContainer">
      {colors.map((color, index) => (
        <ColorBox key={index} colors={colors} />
      ))}
    </div>
  );
}
