import React from "react";

const Age = (props) => {
  return <div>Your age is {props.age}.</div>;
};

const Welcome = (props) => {
  return (
    <div>
      {props.name == "John" && <h1>Welcome, {props.name}!</h1>}
      {props.age > 18 && props.age < 65 && <Age age={props.age} />}
    </div>
  );
};

const App = () => {
  const name = "John";
  const age = 50;

  return <Welcome name={name} age={age} />;
};
export default App;
