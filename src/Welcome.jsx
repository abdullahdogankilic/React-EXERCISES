import React from "react";
import Age from "./Age";

export default function Welcome(props) {
  const { name, age } = props;

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {age && <Age age={age} />}
    </div>
  );
}
