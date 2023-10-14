import React from "react";

const Age = (props) => {
  const { age } = props;
  return (
    <div>
      {age > 18 ? <p>Your age is {age}.</p> : <p>You are very young!</p>}
    </div>
  );
};

const Welcome = (props) => {
  return (
    <div>
      {props.name == "John" && <h1>Welcome, {props.name}!</h1>}
      <Age age={props.age} />
    </div>
  );
};

const App = () => {
  const name = "John";
  const age = 15;

  return <Welcome name={name} age={age} />;
};
export default App;
