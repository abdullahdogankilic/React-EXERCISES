import React from "react";
import Welcome from "./Welcome";

const App = () => {
  const name = "John";
  const age = 50;

  return <Welcome name={name} age={age} />;
};
export default App;
