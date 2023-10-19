import React from "react";

const AlertClock = () => {
  const handleClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(currentTime);
  };

  return (
    <div>
      <button onClick={handleClick}>Time</button>
    </div>
  );
};

export default AlertClock;
