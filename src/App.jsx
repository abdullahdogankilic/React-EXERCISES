import React from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter Value={12} increment={2} decrement={4} />
    </div>
  );
}

export default App;
