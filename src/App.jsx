import React from "react";

const AlertClock = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Clock</button>
    </div>
  );
};

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
