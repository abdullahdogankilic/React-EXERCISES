import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ Value, increment, decrement }) {
  const [count, setCount] = useState(Value);

  const handleIncrement = () => {
    setCount(count + increment);
  };

  const handleDecrement = () => {
    setCount(count - decrement);
  };

  const handleReset = () => {
    setCount(Value);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={handleIncrement}>Click</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
