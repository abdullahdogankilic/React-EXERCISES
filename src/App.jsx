import React, { useEffect, useState } from "react";

function App() {
  const [Time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return (
    <>
      <div>
        <h2>{Time.toLocaleTimeString()}</h2>
      </div>
    </>
  );
}

export default App;
