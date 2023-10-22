import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// npm i uuid
function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };
  const handleReset = () => {
    setItems([]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} id={uuidv4()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
