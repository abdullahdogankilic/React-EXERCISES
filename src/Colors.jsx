import React from "react";

export default function Colors({ colors }) {
  return (
    <div>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>
    </div>
  );
}
