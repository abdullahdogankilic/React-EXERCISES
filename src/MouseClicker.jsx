import React from "react";

function MouseClicker({ name }) {
  function handleClick(event) {
    console.log(event.target.name);
  }
  function handleImgClick(event) {
    event.stopPropagation();
    console.log(event.target.src);
  }
  return (
    <div>
      <button name={name} onClick={handleClick}>
        <img width={24} height={24} src="" alt="" onClick={handleImgClick} />
      </button>
    </div>
  );
}

export default MouseClicker;

// When the image is clicked, the "name" of the button is not printed to the console.
//  This is because the click event on the image does not reach the button.
