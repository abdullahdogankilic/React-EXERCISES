import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ Value, increment, decrement }) {
  const [count, setCount] = useState(Value);

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={setCount(count + increment)}>Click</button>
      <button onClick={setCount(count - decrement)}>decrement</button>
      <button onClick={setCount(Value)}>Reset</button>
    </div>
  );
}
export default Counter;
