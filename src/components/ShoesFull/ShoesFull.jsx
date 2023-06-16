import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const ShoesFull = () => {
  const { id } = useParams();

  const handleAddToCart = () => {
    const userId = localStorage.getItem('userId');
    const cartItem = {
      id: id,
      name: 'Sample Item',
      price: 100,
    };

    // Отримати збережену корзину користувача з localStorage або створити нову, якщо корзина порожня
    const userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    userCart.push(cartItem);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(userCart));

    console.log('Item added to cart:', cartItem);
  };

  return (
    <div>
      <h1>Shoes Full</h1>
      <p>Id: {id}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
