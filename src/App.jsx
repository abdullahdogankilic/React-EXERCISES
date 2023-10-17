import React from "react";
import Welcome from "./Welcome";

function App() {
  const name = "John";
  const age = 19;

  return <Welcome name={name} age={age} />;
}
export default App;
