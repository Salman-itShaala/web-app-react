import { useState } from "react";
import "./App.css";
import CounterButton from "./CounterButton";
import SportsList from "./SportsList";

function App() {
  const [bgColor, setBgColor] = useState("black");
  const colorArray = ["yellow", "blue", "green"];
  return (
    <div style={{ backgroundColor: bgColor }}>
      <button
        onClick={() => setBgColor(colorArray[Math.floor(Math.random() * 3)])}
      >
        Change bg
      </button>
      <CounterButton />
      <CounterButton />
    </div>
  );
}

export default App;
