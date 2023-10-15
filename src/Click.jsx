import React from "react";

function MouseClicker() {
  function Click(event) {
    console.log(event.target.name);
  }

  return (
    <div>
      <button name="one" onClick={Click}>
        Click
      </button>
      <button name="two" onClick={Click}>
        Click
      </button>
      <button name="three" onClick={Click}>
        Click
      </button>
    </div>
  );
}

export default MouseClicker;
