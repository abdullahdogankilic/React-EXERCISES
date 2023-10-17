import React from "react";

function UncontrolledLogin({ onLogin }) {
  function handleLogin(event) {
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    event.preventDefault();
    if (username && password) {
      onLogin({ username, password, remember });
    }
  }

  const Disabled = !username || !password;

  return (
    <form onSubmit={handleLogin}>
      <div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label>
            <input type="checkbox" name="remember" />
            Remember
          </label>
          <button disabled={Disabled}>Login</button>
        </div>
      </div>
    </form>
  );
}

export default UncontrolledLogin;
