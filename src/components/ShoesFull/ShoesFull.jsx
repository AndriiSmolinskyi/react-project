
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ShoesFull.scss'
export const ShoesFull = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [liked, setLiked] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(true);

  useEffect(() => {
    axios.get('/json/api.json').then(res => {
      const shoesData = res.data.sneakers;
      const selectedShoe = shoesData.find(item => item.id === parseInt(id));
      setShoe(selectedShoe);
      setSizes(selectedShoe.size_range.sort((a, b) => a - b));
    });
  }, [id]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userLikes = JSON.parse(localStorage.getItem(`likes_${userId}`)) || [];
    setLiked(userLikes.some(item => item.id === shoe?.id));
  }, [shoe]);

  const handleAddToCart = e => {
    e.preventDefault();

    if (!selectedSize) {
      setIsSizeSelected(false);
      return;
    }

    const userId = localStorage.getItem('userId');
    const cartItem = {
      itemId: shoe.id, // замість "id"
      name: shoe.name,
      price: shoe.retail_price_cents,
      size: selectedSize,
      quantity: 1,
      picture: shoe.main_picture_url, // замість "main_picture_ur"
    };

    let userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    const existingItemIndex = userCart.findIndex(
      item => item.itemId === cartItem.itemId && item.size === cartItem.size // замість "id"

    );

    if (existingItemIndex !== -1) {
      userCart[existingItemIndex].quantity++;
    } else {
      userCart.push(cartItem);
    }

    localStorage.setItem(`cart_${userId}`, JSON.stringify(userCart));

    console.log('Item added to cart:', cartItem);
  };

  const handleToggleLike = () => {
    const userId = localStorage.getItem('userId');
    const likedItem = {
      id: shoe.id, // замість "itemId"
      name: shoe.name,
      price: shoe.retail_price_cents,
      picture: shoe.main_picture_url, // замість "main_picture_ur"
    };
  
    const userLikes = JSON.parse(localStorage.getItem(`likes_${userId}`)) || [];
    const isLiked = userLikes.some(item => item.id === shoe.id); // замість "itemId"
  
    if (isLiked) {
      const updatedLikes = userLikes.filter(item => item.id !== shoe.id); // замість "itemId"
      localStorage.setItem(`likes_${userId}`, JSON.stringify(updatedLikes));
      setLiked(false);
      console.log('Item removed from likes:', shoe.id); // замість "itemId"
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
      <h1>Shoes</h1>
      <p>Id: {id}</p>
      <p>Name: {shoe.name}</p>
      <p>Price: {shoe.retail_price_cents}</p>
      <form onSubmit={handleAddToCart}>
        <ul>
          {sizes.map(size => (
            <li key={size}>
              <label>
                <input
                  type="radio"
                  value={size}
                  checked={selectedSize === size}
                  onChange={e => {
                    setSelectedSize(e.target.value);
                    setIsSizeSelected(true);
                  }}
                />
                {size}
              </label>
            </li>
          ))}
        </ul>
        {!isSizeSelected && <p style={{ color: 'red' }}>Select Size</p>}
        <img src={shoe.main_picture_url} alt={shoe.name} />
        <button type="submit">Add to Cart</button>
      </form>
      <button onClick={handleToggleLike}>
        {liked ? 'Remove from Likes' : 'Add to Likes'}
      </button>
    </div>
  );
};