
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ShoesFull.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart, faCartShopping);

export const ShoesFull = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [liked, setLiked] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(true);

  useEffect(() => {
    axios.get('/react-project/json/api.json').then((res) => {
      const shoesData = res.data.sneakers;
      const selectedShoe = shoesData.find((item) => item.id === parseInt(id));
      setShoe(selectedShoe);
      setSizes(selectedShoe.size_range.sort((a, b) => a - b));
    });
  }, [id]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userLikes = JSON.parse(localStorage.getItem(`likes_${userId}`)) || [];
    setLiked(userLikes.some((item) => item.id === shoe?.id));
  }, [shoe]);

  const handleAddToCart = (e) => {
    e.preventDefault();

    if (!selectedSize) {
      setIsSizeSelected(false);
      return;
    }

    const userId = localStorage.getItem('userId');
    const cartItem = {
      itemId: shoe.id,
      name: shoe.name,
      price: shoe.retail_price_cents,
      size: selectedSize,
      quantity: 1,
      picture: shoe.main_picture_url,
    };

    let userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    const existingItemIndex = userCart.findIndex(
      (item) => item.itemId === cartItem.itemId && item.size === cartItem.size
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
      id: shoe.id,
      name: shoe.name,
      price: shoe.retail_price_cents,
      picture: shoe.main_picture_url,
    };

    const userLikes = JSON.parse(localStorage.getItem(`likes_${userId}`)) || [];
    const isLiked = userLikes.some((item) => item.id === shoe.id);

    if (isLiked) {
      const updatedLikes = userLikes.filter((item) => item.id !== shoe.id);
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

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setIsSizeSelected(true);
  };

  return (
    <div className="full">
      <h1 className='full__title'>Hype Sneakers</h1>

      <div className="flex-block">
        <div className="full__pic">
          <img src={shoe.main_picture_url} alt={shoe.name} className="full__pic__img" />
        </div>

        <div className="full__side-block">
          <p className='full__name'>Name: {shoe.name}</p>
          <p className='full__price'>Price: {shoe.retail_price_cents / 100}$</p>
          <form onSubmit={handleAddToCart} className="full__form">
            <div className="full__form__grid">
              {sizes.map((size) => (
                <label key={size} className={`full__form__label ${selectedSize === size ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => handleSizeSelection(size)}
                    className="full__form__radio"
                  />
                  <div className={`square ${selectedSize === size ? 'selected' : ''}`}>{size}</div>
                </label>
              ))}
            </div>
          </form>
          <div className="btn-block">
            <button type="submit" disabled={!isSizeSelected} onClick={handleAddToCart} className='full__btn'>             
              <span className="full__text__btn">Add to Cart</span>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            {!isSizeSelected && <p style={{ color: 'red' }}>Select Size</p>}
              <button onClick={handleToggleLike} className='full__btn'>
                {liked ? (
                  <>
                    <span className="full__text__btn">Remove from Likes</span>
                    <FontAwesomeIcon icon={faHeart} />
                  </>
                ) : (
                  <>
                    <span className="full__text__btn">Add to Likes</span>
                    <FontAwesomeIcon icon={faHeart} />
                  </>
                )}
              </button>
          </div>
        </div>
      </div>
      <p className='full__par'>{shoe.story_html ? shoe.story_html.replace(/<\/?p>/g, '') : ''}</p>
    </div>
  );
};