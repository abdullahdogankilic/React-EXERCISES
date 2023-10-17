import React from "react";
import Welcome from "./Welcome";

function NameJSX() {
  return <strong>develhope</strong>;
}

function App() {
  return (
    <>
      <div>
        <Welcome name={<NameJSX />} age={20} />
      </div>
    </>
  );
}

export default App;
