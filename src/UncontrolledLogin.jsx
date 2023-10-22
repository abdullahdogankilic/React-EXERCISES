import React from "react";
import "./app.css";

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
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleFormSubmit}>
        <input name="username" />
        <input
          type="password"
          name="password"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
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
