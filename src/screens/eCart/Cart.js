import { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "UPDATE_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}

function Cart() {
  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id: 1, name: "iPhone", price: 80000, quantity: 1 },
    });
  };

  const updateItem = () => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id: 1, quantity: 2 },
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: 1,
    });
  };

  return (
    <div>
      <h2>Cart Items</h2>

      <button onClick={addItem}>Add Item</button>
      <button onClick={updateItem}>Update Item</button>
      <button onClick={removeItem}>Remove Item</button>

      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price} × {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
