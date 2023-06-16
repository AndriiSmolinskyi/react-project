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