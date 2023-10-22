import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <form onSubmit={handleSubmit} className="row g-3 align-items-center">
        <input name="username" className="form-control" ref={inputRef} />
        <input type="password" className="form-control" name="password" />
        <input type="checkbox" name="session" />
        <button className="btn btn-danger">login</button>
        <button type="reset" className="btn btn-dark">
          Reset
        </button>
      </form>
    </div>
  );
}

export default FocusableInput;
