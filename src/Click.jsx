import React from "react";

const MouseClicker = ({ name }) => {
  const Click = (event) => {
    console.log(event.target.name);
  };

  return (
    <div onClick={Click}>
      <button name={name}>
        <img width={24} height={24} src="" alt="" /> Click
      </button>
    </div>
  );
};

export default MouseClicker;
