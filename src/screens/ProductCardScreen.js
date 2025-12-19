import React from "react";

export default function ProductCardScreen({ title, image, children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "220px",
        padding: "12px",
        margin: "10px",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h3>{title}</h3>

      <div>{children}</div>
    </div>
  );
}
