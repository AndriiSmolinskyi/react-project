
//norm
// import React, { useEffect, useState } from 'react';
// import { getAuth } from 'firebase/auth';

// export const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Отримайте поточного користувача
//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (user) {
//       const userId = user.uid;

//       // Отримайте корзину з `localStorage`
//       const currentCart = localStorage.getItem('cart');
//       const cartItems = currentCart ? JSON.parse(currentCart) : [];

//       setCartItems(cartItems);
//     }
//   }, []);

//   const handleRemoveItem = (itemId) => {
//     // Видаліть вибраний товар з корзини
//     const updatedCartItems = cartItems.filter((item) => item.id !== itemId);

//     // Оновіть корзину у `localStorage`
//     localStorage.setItem('cart', JSON.stringify(updatedCartItems));

//     console.log('Item removed from cart');
//     setCartItems(updatedCartItems);
//   };

//   return (
//     <div>
//       <h1>Cart</h1>
//       {cartItems.length > 0 ? (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               <p>Name: {item.name}</p>
//               <p>Price: {item.price}</p>
//               <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//   );
// };



//Best
import { useState, useEffect } from "react";

export const Cart = () => {
   const [cartItems, setCartItems] = useState([]);
 
   useEffect(() => {
     const userId = localStorage.getItem('userId');
     const userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
     setCartItems(userCart);
   }, []);
 
   const handleRemoveItem = (itemId) => {
     const userId = localStorage.getItem('userId');
     const updatedCart = cartItems.filter(item => item.id !== itemId);
     localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
     setCartItems(updatedCart);
     console.log('Item removed from cart:', itemId);
   };
 
   return (
     <div>
       <h1>Cart</h1>
       {cartItems.length > 0 ? (
         <ul>
           {cartItems.map(item => (
             <li key={item.id}>
               <p>Name: {item.name}</p>
               <p>Price: {item.price}</p>
               <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
             </li>
           ))}
         </ul>
       ) : (
         <p>Your cart is empty</p>
       )}
     </div>
   );
 };