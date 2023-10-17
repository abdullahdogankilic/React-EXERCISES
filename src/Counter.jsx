import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ Value, increment }) {
  const [count, setCount] = useState(Value);

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={setCount(count + increment)}>Click</button>
    </div>
  );
}
export default Counter;
