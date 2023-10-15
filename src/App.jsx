import Welcome from "./Welcome";
import React, { useState } from "react";

function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState("");

  function Input(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={Input}
        placeholder="Enter your name"
      />
      <Welcome name={inputValue} />
    </div>
  );
}

export default InteractiveWelcome;
