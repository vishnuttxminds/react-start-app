import React, { useState } from "react";
import Child from "./Child";

const CountMemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  console.log(" Parent (CountMemo) rendered");

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br /><br />

      <button onClick={() => setName(name === "React" ? "Angular" : "React")}>
        Change Name
      </button>

      <Child name={name} />
    </div>
  );
};

export default CountMemo;
