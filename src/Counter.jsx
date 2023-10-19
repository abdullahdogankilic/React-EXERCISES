import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ value, increment }) {
  const [count, setCount] = useState(value);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + increment);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={handleIncrement}>Click</button>
    </div>
  );
}

export default Counter;
