import React, { useRef, useState } from "react";

function CounterUseRef() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const increment = () => {
    countRef.current = countRef.current + 1;
    console.log("Count:", countRef.current);
    // Update state to trigger re-render
    setCount(countRef.current);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter using useRef (Normal Variable)</h2>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterUseRef;
