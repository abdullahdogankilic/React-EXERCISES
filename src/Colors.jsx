import React from "react";
import Color from "./Color";

export default function Colors({ colors }) {
  return (
    <div>
      <ul>
        {colors.map((color) => (
          <Color key={color.id} name={color.name} id={color.id} />
        ))}
      </ul>
    </div>
  );
}
