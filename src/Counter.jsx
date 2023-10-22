import React, { useState, useEffect, useRef } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ Value, increment, decrement }) {
  const [count, setCount] = useState(Value);
  const directionRef = useRef(null);

  useEffect(() => {
    if (count > Value) {
      if (directionRef.current !== "down") {
        directionRef.current = "down";
        console.log(directionRef.current);
      }
    } else if (count < Value) {
      if (directionRef.current !== "up") {
        directionRef.current = "up";
        console.log(directionRef.current);
      }
    }
  }, [count]);

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={() => setCount((prevCount) => prevCount + increment)}>
        increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - decrement)}>
        decrement
      </button>
      <button onClick={() => setCount(Value)}>Reset</button>
    </div>
  );
}

export default Counter;
