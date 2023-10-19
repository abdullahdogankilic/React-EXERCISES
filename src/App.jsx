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

// If you remove the Context Provider from the application,
// the Clock component will lose access to the context values,
// in this case, the language and setLanguage functions.
// The Context Provider is responsible for
// providing the context values to the components that are wrapped within it.
