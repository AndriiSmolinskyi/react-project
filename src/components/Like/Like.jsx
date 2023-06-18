import React, { useState, useEffect } from 'react';
import { useAuth } from "hooks/use-auth";
import { useNavigate } from "react-router-dom";
import "./Like.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
library.add();

export const Like = () => {
  const [likedItems, setLikedItems] = useState([]);
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userLikes = JSON.parse(localStorage.getItem(`likes_${userId}`)) || [];
    setLikedItems(userLikes);
  }, []);

  const handleRemoveItem = (itemId) => {
    const userId = localStorage.getItem('userId');
    const updatedLikes = likedItems.filter(item => item.id !== itemId);
    localStorage.setItem(`likes_${userId}`, JSON.stringify(updatedLikes));
    setLikedItems(updatedLikes);
    console.log('Item removed from likes:', itemId);
  };

  function clickLogin(){
      navigate("/login");
   }
   
  function clickFull(id){
    navigate(`/shoesfull/${id}`);
  }

   if (!isAuth) {
      return (
         <div className='block-none'>
            <h1 className='block-none__title'>Likes</h1>
            <p className='block-none__text'> Please log in to view your liked items.</p>
            <button onClick={() => clickLogin()} className='block-none__btn'>Log In</button>        
         </div>
      );
   }


  return (
    <div className='like'>
      <h1 className='like__title'>Likes</h1>
      {likedItems.length > 0 ? (
        <ul className='like__block'>
          {likedItems.map(item => (
            <li key={item.id} className='like__item'>
              <span key={item.id} onClick={() => clickFull(item.id)} className='like__item__info'>
                <div><img src={item.picture} alt="" /></div>
                <p>Name: {item.name}</p>
                <p>Price: {item.price/100}$</p>                
              </span>
              <button onClick={() => handleRemoveItem(item.id)} className='like__block__btn'>
                <span>Remove like</span><FontAwesomeIcon icon={faHeartCrack} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your likes list is empty</p>
      )}
    </div>
  );
};


