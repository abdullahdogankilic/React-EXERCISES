import React from "react";

function Welcome({ name = "John" }) {
  return <p>Welcome, {name}!</p>;
}

export default Welcome;

// If no name prop is passed to the Welcome component, the component will render the name as undefined.
