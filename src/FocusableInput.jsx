import React, { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);
  let mountRef = useRef(false);

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
      console.log("Mounting first time!");
    } else {
      console.log("Mounting again!");
    }
    inputRef.current.focus();
  }, []);

  function handleSubmit(event) {
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
      <form onSubmit={handleSubmit}>
        <input name="username" ref={inputRef} />
        <input type="password" name="password" />
        <input type="checkbox" name="session" />
        <button>login</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default FocusableInput;
