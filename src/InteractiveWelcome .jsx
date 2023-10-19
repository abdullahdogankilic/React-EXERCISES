import Welcome from "./Welcome";
import React, { useState } from "react";

function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState("");

  function input(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={input} placeholder="Enter your name" />
      <Welcome name={inputValue} />
    </div>
  );
}

export default InteractiveWelcome;
