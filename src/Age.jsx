export default function Age(props) {
  const { age } = props;
  return (
    <div>
      {age > 18 ? <p>Your age is {age}.</p> : <p>You are very young!</p>}
    </div>
  );
}
