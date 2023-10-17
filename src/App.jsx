import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2> {count} </h2>
      <button onClick={() => setCount(count + 1)}>Click </button>
    </div>
  );
}
export default App;
