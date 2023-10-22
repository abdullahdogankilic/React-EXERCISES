import React from "react";

export default function Color({ name, id }) {
  return <li key={id}>{name}</li>;
}
