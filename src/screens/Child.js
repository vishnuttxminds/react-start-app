import React from "react";

const Child = ({ name }) => {
  console.log(" Child component rendered");

  return <h3>Child Name: {name}</h3>;
};

export default React.memo(Child);
