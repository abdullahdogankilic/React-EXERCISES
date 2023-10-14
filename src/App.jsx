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

//  If you pass a value directly, such as setCounter(counter + 1),
//  React's ability to keep track of condition conditions can be detected in these differences.
//   However, in accordance with its function,
//   it ensures that every update step of React is followed accurately.
