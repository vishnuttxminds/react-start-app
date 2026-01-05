import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import DataDisplayComponent from "../hooks/DataDisplayComponent";
import useForm from "../hooks/useForm";

const CustomHooks = () => {
  const [count, increment] = useCounter(0);
  const endUrl = `/posts`;

  const name = useForm("");
  const age = useForm("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name.value}, Age: ${age.value}`);
    setSubmittedData({
      name: name.value,
      age: age.value,
    });
  };

  return (
    <div>
      <p>CustomHooks</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <br />

      {/* <DataDisplayComponent url={endUrl} /> */}

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            {/* The spread operator here is equivalent to value={name.value} onChange={name.onChange} */}
            <input type="text" {...name} />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="number" {...age} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <p>Entered Name: {submittedData?.name}</p>
      <p>Entered Age: {submittedData?.age}</p>
    </div>
  );
};

export default CustomHooks;
