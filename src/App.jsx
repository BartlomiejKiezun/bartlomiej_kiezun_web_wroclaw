import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Summary from './components/Summary';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart(prev =>
      prev.map(p => (p.id === id ? { ...p, quantity } : p))
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <ProductList products={products} addToCart={addToCart} />
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          </>
        } />
        <Route path="/summary" element={<Summary cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;