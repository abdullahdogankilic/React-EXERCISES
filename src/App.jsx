import React from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter Value={2} increment={5} decrement={2} />
    </div>
  );
}

export default App;
