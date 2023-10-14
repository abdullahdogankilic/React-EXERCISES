import React, { useState } from "react";

const App = ({ Value, increment }) => {
  const [count, setCount] = useState(Value);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={setCount(count + increment)}>Click</button>
    </div>
  );
};

export default App;
