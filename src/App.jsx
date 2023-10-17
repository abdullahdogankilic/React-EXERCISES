import React from "react";
import Welcome from "./Welcome";

function App() {
  const name = "John Doe";
  const age = 15;

  return <Welcome name={name} age={age} />;
}
export default App;
