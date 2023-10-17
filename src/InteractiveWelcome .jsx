import React, { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState("");

  function Input(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={Input} placeholder="Enter your name" />
      <Welcome name={inputValue} age={22} />
    </div>
  );
}

export default InteractiveWelcome;
