import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./App.jsx";
import exes from "./exe.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hello />
    <exes />
  </React.StrictMode>
);
