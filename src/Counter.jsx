import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>Click </button>
    </div>
  );
}
export default Counter;
