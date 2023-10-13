import React from "react";

const Message = () => {
  return <p>What a beautiful day!</p>;
};

const Hello = () => {
  return (
    <div>
      <h2>Hello, World!</h2>
      <Message />
    </div>
  );
};

export default Hello;
