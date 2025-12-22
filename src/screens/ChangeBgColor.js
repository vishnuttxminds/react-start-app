import React, { useRef } from "react";

function ChangeBgColor() {
  const divRef = useRef(null);

  const changeColor = () => {
    divRef.current.style.backgroundColor = "orange";
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        ref={divRef}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightblue",
          marginBottom: "10px",
        }}
      ></div>

      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ChangeBgColor;
