import React, { useState } from "react";
import Container from "./Container";
import "./App.css";
import { LanguageContext } from "./LanguageContext";
import Clock from "./Clock";

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italian</option>
        </select>
      </div>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Clock language={language} />
      </LanguageContext.Provider>
      <Container title={<h1>My Awesome Application</h1>}>
        <h1>Hello world!</h1>
      </Container>
    </div>
  );
}

export default App;
