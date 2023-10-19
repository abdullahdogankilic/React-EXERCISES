import React from "react";
export default function AlertClock() {
  function clock() {
    const time = new Date().toLocaleTimeString();
    return alert(time);
  }
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <button onClick={clock}>Clock</button>
      </div>
    </>
  );
}
