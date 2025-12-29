// Counter.js
import React from "react";
function Counter2({ text, count }) {
    console.log("Counter2 Rendered:", text);
  return (
    <div style={{ marginBottom: "10px" }}>
      <h3>{text}</h3>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter2
