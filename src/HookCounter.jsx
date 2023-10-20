import useCounter from "./useCounter";

function HookCounter() {
  const { handleUsername, handlePassword } = useCounter(0);

  return (
    <div>
      <div>
        <label>name</label>
        <input type="text" onChange={handleUsername} />
      </div>
      <div>
        <label>password</label>
        <input type="password" onChange={handlePassword} />
      </div>
    </div>
  );
}

export default HookCounter;
