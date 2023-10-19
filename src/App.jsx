import React from "react";
import "./App.css";
import { LanguageProvider } from "./LanguageContext";
import Clock from "./Clock";

function App() {
  return (
    <div>
      <LanguageProvider>
        <div>
          <Clock />
        </div>
      </LanguageProvider>
    </div>
  );
}

export default App;
