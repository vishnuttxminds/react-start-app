import React from "react";
import useCounter from "../hooks/useCounter";
import DataDisplayComponent from "../hooks/DataDisplayComponent";

const CustomHooks = () => {
  const [count, increment] = useCounter(0);
  const endUrl = `/posts`;

  return (
    <div>
      <p>CustomHooks</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <br />

      <DataDisplayComponent url={endUrl} />
    </div>
  );
};

export default CustomHooks;
