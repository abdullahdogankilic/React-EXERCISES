import React from "react";
export default function AlertClock() {
  const Time = new Date().toLocaleTimeString();
  return alert(Time);
}
