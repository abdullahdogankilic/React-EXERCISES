import React from "react";
import Container from "./Container";
import "./App.css";
import LanguageProvider from "./LanguageContext";
import Clock from "./Clock";

function App() {
  return (
    <div>
      <LanguageProvider>
        <Clock />
      </LanguageProvider>
      <Container title={<h1>My Awesome Application</h1>}>
        <h1>Hello world!</h1>
      </Container>
    </div>
  );
}

export default App;
