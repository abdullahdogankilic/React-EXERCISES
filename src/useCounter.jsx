import React, { useState } from "react";

function useCounter(initialValue = "") {
  const [username, setUsername] = useState(initialValue);
  const [password, setPassword] = useState(initialValue);

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return { username, password, handleUsername, handlePassword };
}

export default useCounter;
