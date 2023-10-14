import React from "react";
function AlertClock() {
  function Clock() {
    const Time = new Date().toLocaleTimeString();
    return alert(Time);
  }
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <button onClick={Clock}>Clock</button>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <AlertClock />
    </>
  );
}

export default App;
