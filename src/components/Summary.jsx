import React from 'react';
import { useNavigate } from 'react-router-dom';

const getFullPrice = (price) => price.main + price.fractional / 100;

const Summary = ({ cart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + getFullPrice(item.price) * item.quantity, 0);

  return (
    <div>
      <h2>Podsumowanie zamówienia</h2>
      {cart.length === 0 ? (
        <p>Brak produktów w koszyku.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id}>
              {item.name} x {item.quantity} = {(getFullPrice(item.price) * item.quantity).toFixed(2)} zł
            </div>
          ))}
          <h3>Łączna kwota: {total.toFixed(2)} zł</h3>
        </>
      )}
      <br />
      <button onClick={() => navigate('/')}>Wróć do sklepu</button>
    </div>
  );
};

export default Summary;