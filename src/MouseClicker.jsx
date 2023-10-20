import React from "react";

const MouseClicker = ({ name }) => {
  const handleClick = (event) => {
    console.log(event.target.name);
  };

  return (
    <div>
      <button name={name} onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default MouseClicker;
