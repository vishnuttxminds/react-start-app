import React from "react";

const Product = ({ product, addToCart }) => {
  console.log(" Product rendered:", product.name);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default React.memo(Product);
