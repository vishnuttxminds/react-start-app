import React, { useEffect, useState } from "react";

function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); 

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  );
}

export default TitleCounter;
