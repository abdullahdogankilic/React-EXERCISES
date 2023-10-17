import Age from "./Age";

export default function Welcome(props) {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
      {props.age > 18 && props.age < 65 && <Age age={props.age} />}
    </div>
  );
}
