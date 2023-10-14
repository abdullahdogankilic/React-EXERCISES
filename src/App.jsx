import React from "react";

function App() {
  function AlertClock() {
    const Time = new Date().toLocaleTimeString();
    return alert(Time);
  }
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <button onClick={AlertClock}>Clock</button>
      </div>
    </>
  );
}

export default App;
