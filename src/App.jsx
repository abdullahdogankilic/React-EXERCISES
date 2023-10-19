import React from "react";
import Container from "./Container";
import "./App.css";

function App() {
  return (
    <div>
      <Container title={<h1>My Awesome Application</h1>}>
        <h1>Hello world!</h1>
      </Container>
    </div>
  );
}

export default App;
