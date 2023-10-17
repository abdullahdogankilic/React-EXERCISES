import React from "react";
import Welcome from "./Welcome";

function nameJSX() {
  <strong>develhope</strong>;
}

function App() {
  return (
    <>
      <div>
        <Welcome name={nameJSX} age={20} />
      </div>
    </>
  );
}

export default App;
