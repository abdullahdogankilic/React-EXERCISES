import React from "react";

function Uncontrolled() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
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

// Advantages = Ease of Use: The FormData API simplifies the process of capturing form data,
//  especially when dealing with complex forms with multiple inputs.
// It allows you to easily gather form data into a single object.

// Disadvantages=Limited Browser Support: While most modern browsers support the FormData API,
// some older versions might have limited support.Therefore,
// if compatibility with older browsers is a concern, additional handling might be necessary
