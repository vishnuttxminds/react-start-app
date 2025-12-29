import React, { useState } from "react";
import Product from "./Product";

const productsData = [
  { id: 1, name: "iPhone", price: 80000 },
  { id: 2, name: "Samsung", price: 60000 },
  { id: 3, name: "Pixel", price: 50000 }
];

const ProductListWithoutCallback = () => {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const addToCart = (product) => {
    setCartCount(cartCount + 1);
  };

  const filteredProducts = productsData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Cart Items: {cartCount}</h2>

      <input
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map(product => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductListWithoutCallback;
