import React from 'react';

const ProductCard = ({ title, description, price, imageUrl }) => (
  <div className="product-card">
    <img src={imageUrl} alt={title} className="product-image" />
    <h3>{title}</h3>
    <p>{price}</p>
    <p>{description}</p>
  </div>
);

export default ProductCard;
