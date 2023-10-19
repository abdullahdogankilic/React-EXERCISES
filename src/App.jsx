import React from "react";
import AlertClock from "./AlertClock";

const App = () => {
  const clock = () => {
    const time = new Date().toLocaleTimeString();
    alert(time);
  };

  return (
    <div>
      <AlertClock onClick={clock} />
    </div>
  );
};

export default App;
