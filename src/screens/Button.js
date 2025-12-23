// Button.js
function Button({ onIncrement }) {
    console.log("Button Rendered:", onIncrement);
  return (
    <button onClick={onIncrement}>
      Plus
    </button>
  );
}

export default Button;
