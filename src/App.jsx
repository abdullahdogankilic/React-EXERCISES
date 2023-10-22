import React from "react";
import "./App.css";
import Colors from "./Colors";

function App() {
  return (
    <div>
      <Colors Colors={["Red", "Blue", "Gray", "Black", "Yellow"]} />
    </div>
  );
}

export default App;
