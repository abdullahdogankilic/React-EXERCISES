import React from "react";

function Welcome({ name }) {
  return <p>Welcome, {name}!</p>;
}

Welcome.defaultProps = {
  name: "Guest",
};

export default Welcome;

// If no name prop is passed to the Welcome component, the component will render the name as undefined.
