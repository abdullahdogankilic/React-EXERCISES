import React from "react";
import Welcome from "./Welcome";

function App() {
  const name = "John Doe";
  const age = 22;

  return (
    <div>
      <Welcome name={name} age={age} />
    </div>
  );
}
export default App;
