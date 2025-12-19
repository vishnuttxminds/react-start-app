import React, { useState } from "react";

const HomeScreen = (props) => {
  const [count, setCount] = useState(0);

  var counter = 0;

  const increment = () => {
    setCount(count + 1);
    // counter ++;
    // document.getElementById("counts").innerText = "Total: " + counter;
  };

  const decrement = () => {
    setCount(count - 1);
    // counter --;
    // document.getElementById("counts").innerText = "Total: " + counter;
  };

  return (
    <div>
      {/* <p id="counts">Total: {counter}</p> */}
      <p>Total: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default HomeScreen;
