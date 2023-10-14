import React, { useState, useEffect } from "react";
import CounterDisplay from "./Counter";

const App = ({ Value, increment, decrement }) => {
  const [count, setCount] = useState(Value);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={setCount(count + increment)}>Click</button>
      <button onClick={setCount(count - decrement)}>decrement</button>
      <button onClick={setCount(Value)}>Reset</button>
    </div>
  );
};

export default App;
