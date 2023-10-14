import React from "react";

const MyComponent = (props) => {
  return <strong>{props.name}</strong>;
};

const nameJSX = <div>develhope</div>;

function App() {
  return (
    <>
      <div>
        <MyComponent name={nameJSX} />
      </div>
    </>
  );
}

export default App;
