import "./App.css";
import ColorBox from "./Components/ColorBox";
import ColorBoxContainer from "./Components/ColorBoxesContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <ColorBoxContainer colors={data} />
    </>
  );
}
export default App;
