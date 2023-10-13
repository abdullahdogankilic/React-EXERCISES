import { useState } from "react";
import "./App.css";

function App({ a, b }) {
  let sum = a + b;
  return (
    <>
      <div>
        <h1>Hello,{sum}</h1>
      </div>
    </>
  );
}

export default App;
