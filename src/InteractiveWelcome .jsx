import React, { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <Welcome name={inputValue} age={22} />
    </div>
  );
}

export default InteractiveWelcome;
