import React from "react";

function Uncontrolled() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const session = event.target.elements.namedItem("session").value;

    const data = {
      username,
      password,
      session,
    };
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input name="username" />
        <input type="password" name="password" />
        <input type="checkbox" name="session" />
        <button>login </button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default Uncontrolled;

// FormData;
