import React from "react";
import "./App.css";
import Colors from "./Colors";

function App() {
  return (
    <div>
      <Colors
        colors={[
          { name: "adk", id: 1 },
          { name: "adk2", id: 2 },
          { name: "adk3", id: 3 },
        ]}
      />
    </div>
  );
}

export default App;
