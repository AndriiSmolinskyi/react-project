import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ShoesFull = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    axios.get('/json/api.json').then(res => {
      const shoesData = res.data.sneakers;
      const selectedShoe = shoesData.find(item => item.id === parseInt(id));
      setShoe(selectedShoe);
    });
  }, [id]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userLikes = JSON.parse(localStorage.getItem(`likes_${userId}`)) || [];
    setLiked(userLikes.some(item => item.id === shoe?.id));
  }, [shoe]);

  

  const handleAddToCart = () => {
    const userId = localStorage.getItem('userId');
    const cartItem = {
      id: shoe.id,
      name: shoe.name,
      price: shoe.retail_price_cents,
      quantity: 1, // Початкова кількість айтема
    };
  
    let userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    const existingItemIndex = userCart.findIndex(item => item.id === cartItem.id);
  
    if (existingItemIndex !== -1) {
      // Якщо айтем вже є у корзині, оновлюємо його кількість
      userCart[existingItemIndex].quantity++;
    } else {
      // Якщо айтем ще не мається у корзині, додаємо його
      userCart.push(cartItem);
    }
  
    localStorage.setItem(`cart_${userId}`, JSON.stringify(userCart));
  
    console.log('Item added to cart:', cartItem);
  };




  const handleToggleLike = () => {
    const userId = localStorage.getItem('userId');
    const likedItem = {
      id: shoe.id,
      name: shoe.name,
      price: shoe.retail_price_cents,
    };

    const userLikes = JSON.parse(localStorage.getItem(`likes_${userId}`)) || [];
    const isLiked = userLikes.some(item => item.id === shoe.id);

    if (isLiked) {
      const updatedLikes = userLikes.filter(item => item.id !== shoe.id);
      localStorage.setItem(`likes_${userId}`, JSON.stringify(updatedLikes));
      setLiked(false);
      console.log('Item removed from likes:', shoe.id);
    } else {
      userLikes.push(likedItem);
      localStorage.setItem(`likes_${userId}`, JSON.stringify(userLikes));
      setLiked(true);
      console.log('Item added to likes:', likedItem);
    }
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
      <button onClick={handleToggleLike}>
        {liked ? 'Remove from Likes' : 'Add to Likes'}
      </button>
    </div>
  );
};