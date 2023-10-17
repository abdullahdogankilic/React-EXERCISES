import React, { useState } from "react";

function Counter({ value, increment }) {
  const [count, setCount] = useState(value);

  const handleIncrement = () => {
    setCount(count + increment);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Click</button>
    </div>
  );
}

export default Counter;
