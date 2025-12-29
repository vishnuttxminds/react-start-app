import React, { useState, useMemo } from "react";

const CounterWithMemo = () => {
  const [count, setCount] = useState(0);

  const memoizedCount = useMemo(() => {
    console.log("useMemo executed");
    return count;
  }, [count]);

  return (
    <div>
      <h2>Count: {memoizedCount}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default CounterWithMemo;
