import React, { useState, useCallback, useMemo } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const productsData = [
  { id: 1, name: "iPhone", price: 80000 },
  { id: 2, name: "Samsung", price: 60000 },
  { id: 3, name: "Pixel", price: 50000 },
];

const ProductListWithCallback = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = useCallback((product) => {
    setCartItems((prev) => [...prev, product]);
  }, []);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]);

  const goToCheckout = () => {
    navigate("/cart");
  };

  return (
    <div>
      <h2>Cart Items: {cartItems.length}</h2>
      <h3>Total Price: ₹ {totalPrice}</h3>

      {productsData.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}

      <button onClick={goToCheckout}>Go to Checkout</button>
    </div>
  );
};

export default ProductListWithCallback;
