import { useState, useEffect } from "react";
import { useAuth } from "hooks/use-auth";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
   const [cartItems, setCartItems] = useState([]);
   const { isAuth } = useAuth();
   const navigate = useNavigate();

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

   function clickLogin(){
      navigate("/login");
   }

   if (!isAuth) {
         return (
         <div>
            <h1>Cart</h1>
            <p>Please log in to view your cart items.</p>
            <button onClick={() => clickLogin()} >Log In</button>
         </div>
         );
      }
 
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