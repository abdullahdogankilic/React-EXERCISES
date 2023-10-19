import React, { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ Value, increment, decrement }) {
  const [count, setCount] = useState(Value);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + increment);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - decrement);
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
