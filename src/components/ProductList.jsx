import React from 'react';

const getFullPrice = (price) => (price.main + price.fractional / 100).toFixed(2);

const ProductList = ({ products, addToCart }) => (
  <div class="productlist">
    <h2>Lista produktów</h2>
    {products.map(product => (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>Cena: {getFullPrice(product.price)} zł</p>
        <button onClick={() => addToCart(product)}>Dodaj do koszyka</button>
      </div>
    ))}
  </div>
);

export default ProductList;