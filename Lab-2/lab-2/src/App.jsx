import "./App.css";
import Card from "./Components/card";

function App() {
  return (
    <>
      <div className="Website">
        <h1 className="Website-Title">Resorts Lite</h1>
        <div className="Main-Container">
          <Card
            image="src\assets\images\1.jpg"
            country="Indonesia"
            hotel="Gili Air Hotel"
            rating={4.8}
            price="$589/night"
          />
          <Card
            image="src\assets\images\2.jpg"
            country="Saychelles"
            hotel="Hilton Resort"
            rating={4.2}
            price="$629/night"
          />
          <Card
            image="src\assets\images\3.jpg"
            country="US Virgin Islands"
            hotel="Goa Resort"
            rating={3.5}
            price="$485/night"
          />
          <Card
            image="src\assets\images\4.jpg"
            country="Bahamas"
            hotel="Kuredu Resort"
            rating={4.1}
            price="$729/night"
          />
          <Card
            image="src\assets\images\5.jpg"
            country="Mauritius"
            hotel="Trou D'eau Douce"
            rating={4.9}
            price="$877/night"
          />
          <Card
            image="src\assets\images\6.jpg"
            country="Bermuda"
            hotel="Staniel Cay Hotel"
            rating={3.2}
            price="$365/night"
          />
        </div>
      </div>
    </>
  );
}

export default App;
