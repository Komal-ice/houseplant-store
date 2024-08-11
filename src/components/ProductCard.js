// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
