import React from "react";

const MouseClicker = ({ name }) => {
  const handleClick = () => {
    console.log(name);
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
