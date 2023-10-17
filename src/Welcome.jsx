import Age from "./Age";
export default function Welcome(props) {
  return (
    <div>
      {props.name == "John" && <h1>Welcome, {props.name}!</h1>}
      {props.age > 18 && <Age age={props.age} />}
    </div>
  );
}
