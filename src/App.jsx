import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function Username(event) {
    setUsername(event.target.value);
  }

  function Password(event) {
    setPassword(event.target.value);
  }

  function Remember(event) {
    setRemember(event.target.checked);
  }
  function handleLogin() {
    if (username && password) {
      onLogin({ username, password, remember });
    }
  }

  const Disabled = !username || !password;

  return (
    <div>
      <div>
        <label>Username:</label>
        <input type="text" onChange={Username} />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" onChange={Password} />
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={Remember} />
          Remember
        </label>
        <button onClick={handleLogin} disabled={Disabled}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
