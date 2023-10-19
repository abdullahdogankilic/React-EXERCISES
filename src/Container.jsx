import React from "react";
import "./App.css";
const Container = ({ children, title }) => {
  return (
    <div className="container">
      <div className="app-title">{title}</div>
      <div className="app-content">{children}</div>
    </div>
  );
};

export default Container;
