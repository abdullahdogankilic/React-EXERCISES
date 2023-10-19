import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2> {count} </h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click
      </button>
    </div>
  );
}
export default Counter;
