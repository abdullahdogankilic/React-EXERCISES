import React, { useEffect, useState } from "react";

function App() {
  const [Time, setTime] = useState(new Date().toLocaleTimeString());

  const sec = new Date().getSeconds;
  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, [sec]);
  return (
    <>
      <div>
        <h2>{Time}</h2>
      </div>
    </>
  );
}

export default App;
