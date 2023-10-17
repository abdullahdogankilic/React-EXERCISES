import React from "react";

const Hello = ({ name }) => {
  function create(name) {
    return <h1>Hello, {name}</h1>;
  }

  return <div>{create(name)}</div>;
};

export default Hello;
