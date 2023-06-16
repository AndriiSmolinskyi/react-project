
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ShoesFull = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    axios.get('/json/api.json').then(res => {
      const shoesData = res.data.sneakers;
      const selectedShoe = shoesData.find(item => item.id === parseInt(id));
      setShoe(selectedShoe);
    });
  }, [id]);

  const handleAddToCart = () => {
    const userId = localStorage.getItem('userId');
    const cartItem = {
      id: shoe.id,
      name: shoe.name,
      price: shoe.retail_price_cents,
    };

    // Отримати збережену корзину користувача з localStorage або створити нову, якщо корзина порожня
    const userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    userCart.push(cartItem);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(userCart));

    console.log('Item added to cart:', cartItem);
  };

  if (!shoe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Shoes Full</h1>
      <p>Id: {id}</p>
      <p>Name: {shoe.name}</p>
      <p>Price: {shoe.retail_price_cents}</p>
      <img src={shoe.main_picture_url} alt={shoe.name} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};