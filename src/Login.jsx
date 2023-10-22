import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleReset = () => {
    setPassword("");
    setRemember(false);
    setUsername("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      onLogin({ username, password, remember });
    }
  };

  const disabled = !username || !password;
  const buttonClassName = password.length < 8 ? "btnRed" : "btnGreen";

  return (
    <form onSubmit={handleLogin}>
      <div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={handleRememberChange}
            />
            Remember
          </label>
          <button
            onClick={handleLogin}
            disabled={disabled}
            className={buttonClassName}
          >
            Login
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
