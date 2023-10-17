import React from "react";
import Age from "./Age";

export default function Welcome({ name, age }) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {age > 18 && <Age age={age} />}
    </div>
  );
}
