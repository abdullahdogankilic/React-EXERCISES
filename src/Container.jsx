import React, { useState } from "react";
import "./App.css";
const Container = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(false);
  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }
  return (
    <div className="container">
      <div className="app-title">
        {title} <button onClick={handleToggleCollapse}>Toggle</button>
      </div>
      <div className={!collapsed ? "app-content" : "app-content-hidden"}>
        {children}
      </div>
    </div>
  );
};

export default Container;
