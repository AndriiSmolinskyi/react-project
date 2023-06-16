import React, { useState, useEffect } from 'react';
import { useAuth } from "hooks/use-auth";
import { useNavigate } from "react-router-dom";

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
         <div>
            <h1>Likes</h1>
            <p>Please log in to view your liked items.</p>
            <button onClick={() => clickLogin()} >Log In</button>
         </div>
      );
   }


  return (
    <div>
      <h1>Likes</h1>
      {likedItems.length > 0 ? (
        <ul>
          {likedItems.map(item => (
            <li key={item.id}>
              <span key={item.id} onClick={() => clickFull(item.id)}>
                <p>Name: {item.name}</p>
                <p>Price: {item.price/100}</p>
                <div><img src={item.picture} alt="" /></div>
              </span>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your likes list is empty</p>
      )}
    </div>
  );
};


