import React, { useState, useEffect } from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter Value={2} increment={2} decrement={2} />
    </div>
  );
}

export default App;
