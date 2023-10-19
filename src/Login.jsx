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
  function Reset() {
    setPassword("");
    setRemember(false);
    setUsername("");
  }
  function HandleLogin() {
    if (username && password) {
      onLogin({ username, password, remember });
    }
  }

  const Disabled = !username || !password;

  return (
    <div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={Username} />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={Password} />
      </div>
      <div>
        <label>
          <input type="checkbox" value={remember} onChange={Remember} />
          Remember
        </label>
        <button onClick={HandleLogin} disabled={Disabled}>
          Login
        </button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}

export default Login;
