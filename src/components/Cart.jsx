import React from 'react';
import { useNavigate } from 'react-router-dom';

const getFullPrice = (price) => price.main + price.fractional / 100;

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + getFullPrice(item.price) * item.quantity, 0);

  return (
    <div class="cart">
      <h2>Koszyk</h2>
      {cart.length === 0 && <p>Koszyk jest pusty.</p>}
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - {getFullPrice(item.price).toFixed(2)} zł x
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
          = {(getFullPrice(item.price) * item.quantity).toFixed(2)} zł
          <button onClick={() => removeFromCart(item.id)}>Usuń</button>
        </div>
      ))}
      <h3>Razem: {total.toFixed(2)} zł</h3>
      {cart.length > 0 && <button onClick={() => navigate('/summary')}>Złóż zamówienie</button>}
    </div>
  );
};

export default Cart;