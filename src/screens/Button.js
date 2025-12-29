import React from "react";
function Button({ onIncrement }) {
    console.log("Button Rendered:", onIncrement);
  return (
    <button onClick={onIncrement}>
      Plus
    </button>
  );
}

export default React.memo(Button);
