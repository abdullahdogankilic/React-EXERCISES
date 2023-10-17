import React from "react";
import Welcome from "./Welcome";

function App() {
  const name = "John Doe";
  const age = 55;

  return <Welcome name={name} age={age} />;
}
export default App;
