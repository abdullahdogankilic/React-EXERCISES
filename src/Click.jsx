import React from "react";

const MouseClicker = ({ name }) => {
  const Click = (event) => {
    console.log(event.target.name);
  };

  return (
    <div>
      <button name={name} onClick={Click}>
        Click
      </button>
    </div>
  );
};

export default MouseClicker;
