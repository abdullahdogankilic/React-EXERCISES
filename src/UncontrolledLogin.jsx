import React, { useRef } from "react";

function Login({ onLogin }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  function handleLogin() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const remember = rememberRef.current.checked;

    if (username && password) {
      onLogin({ username, password, remember });
    }
  }

  return (
    <div>
      <div>
        <label>Username:</label>
        <input type="text" ref={usernameRef} />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" ref={passwordRef} />
      </div>
      <div>
        <label>
          <input type="checkbox" ref={rememberRef} />
          Remember
        </label>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
