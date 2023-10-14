import React from "react";

const Age = (props) => {
  return <div>Your age is {props.age}.</div>;
};

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
      <Age age={props.age} />
    </div>
  );
};

const App = () => {
  const name = "John Doe";
  const age = 30;

  return <Welcome name={name} age={age} />;
};
export default App;
