import React from "react";
import Welcome from "./Welcome";

const jsxName = <span>Hello, I am a JSX expression!</span>;

function App() {
  return (
    <>
      <div>
        <Welcome name={jsxName} age={20} />
      </div>
    </>
  );
}

export default App;
