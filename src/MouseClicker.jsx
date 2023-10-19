import React from "react";

function MouseClicker({ name }) {
  function click(event) {
    console.log(event.target.name);
  }
  function imgClick(event) {
    console.log(event.target.src);
  }
  return (
    <div>
      <button name={name} onClick={click}>
        <img width={24} height={24} src="" alt="" onClick={imgClick} />
      </button>
    </div>
  );
}

export default MouseClicker;

// When the image is clicked, the "name" of the button is not printed to the console.
//  This is because the click event on the image does not reach the button.
