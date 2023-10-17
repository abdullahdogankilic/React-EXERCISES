import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <CounterDisplay Value={2} increment={2} decrement={2} />
    </div>
  );
}

export default App;
