import React from "react";

function MouseClicker({ name }) {
  function handleClick(event) {
    console.log(event.target.closest("button").getAttribute("name"));
  }

  return (
    <div>
      <button name={name} onClick={handleClick}>
        <img width={24} height={24} src="" alt="" /> Click
      </button>
    </div>
  );
}

export default MouseClicker;
