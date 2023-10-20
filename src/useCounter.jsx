import React, { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((e) => e + 1);
  }

  function decrement() {
    setCount((e) => e - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return { count, increment, decrement, reset };
}

function HookCounter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default HookCounter;
