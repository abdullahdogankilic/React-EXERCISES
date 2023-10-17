import React from "react";
import AlertClock from "./Alert";

const App = () => {
  const Clock = () => {
    const Time = new Date().toLocaleTimeString();
    alert(Time);
  };

  return (
    <div>
      <AlertClock onClick={Clock} />
    </div>
  );
};

export default App;
