export default function Colors({ Colors }) {
  return (
    <div>
      <ul>
        {Colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
}
