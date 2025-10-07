import { useState } from "react";
function changeBackgroundColor() {
  return Math.floor(Math.random() * 25);
}
export default function ColorBox({ colors }) {
  const [randomIndex, setRandomIndex] = useState(changeBackgroundColor);
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: colors[randomIndex] }}
      onClick={() => setRandomIndex(changeBackgroundColor)}
    ></div>
  );
}
