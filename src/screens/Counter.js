import { useContext } from "react";
import CounterContext from "../context/CounterContext";

function Counter() {
  const { count, setCount } = useContext(CounterContext);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Plus</button>
    </div>
  );
}

export default Counter;
