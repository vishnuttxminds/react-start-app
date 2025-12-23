
import { useContext } from "react";
import CounterContext from "../context/CounterContext";

function Counter() {
  const { count, increment } = useContext(CounterContext);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Plus</button>
    </div>
  );
}

export default Counter;
