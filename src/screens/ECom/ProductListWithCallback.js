import React, { useState, useCallback, useMemo } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const productsData = [
  { id: 1, name: "iPhone", price: 80000, slug: "iphone" },
  { id: 2, name: "Samsung", price: 60000, slug: "samsung" },
  { id: 3, name: "Pixel", price: 50000, slug: "pixel" },
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

  const goToItem = (slug) => {
    console.log("Navigating to product:", slug);
    navigate(`/products/${slug}`);
  };

  return (
    <div>
      <h2>Cart Items: {cartItems.length}</h2>
      <h3>Total Price: ₹ {totalPrice}</h3>

      {productsData.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          onView={() => goToItem(product.slug)}
        />
      ))}

      <button onClick={goToCheckout}>Go to Checkout</button>
    </div>
  );
};

export default ProductListWithCallback;
