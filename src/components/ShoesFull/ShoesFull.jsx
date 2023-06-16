// import React from 'react';
// import { useParams } from 'react-router-dom';

// export const ShoesFull = () => {
//   const { id } = useParams();

//   return (
//     <div>
//       <h1>Shoes Full</h1>
//       <p>Id: {id}</p>
//     </div>
//   );
// };


//norm
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getAuth } from 'firebase/auth';

// export const ShoesFull = () => {
//   const { id } = useParams();
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = () => {
//     const userId = localStorage.getItem('userId');
//     const cartItem = {
//       id: id,
//       name: 'Sample Item', // Замість 'Sample Item' використовуйте реальні дані товару
//       price: 100, // Замість 100 використовуйте реальну ціну товару
//     };

//     // Отримайте поточну корзину з `localStorage`
//     const currentCart = localStorage.getItem('cart');
//     const cartItems = currentCart ? JSON.parse(currentCart) : [];

//     // Додайте новий товар до корзини
//     cartItems.push(cartItem);

//     // Збережіть оновлену корзину у `localStorage`
//     localStorage.setItem('cart', JSON.stringify(cartItems));

//     console.log('Item added to cart');
//     setCartItems(cartItems);
//   };

//   return (
//     <div>
//       <h1>Shoes Full</h1>
//       <p>Id: {id}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };



//Best
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