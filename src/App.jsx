import React, { useEffect, useState } from "react";
import Counter from "./Counter";

function App() {
  return (
    <>
      <Counter Value={2} increment={2} decrement={2} />
    </>
  );
}

export default App;
