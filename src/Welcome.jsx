import React from "react";
import Age from "./Age";

export default function Welcome(props) {
  const { name, age } = props;

  const isJohn = name === "John";
  const isAgeRange = age > 18 && age < 65;

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {isJohn && isAgeRange && <Age age={age} />}
    </div>
  );
}
