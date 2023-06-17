
import React, { useState, useEffect } from 'react';
import { useAuth } from 'hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import { CartItem } from './CartItem/CartItem';
import './Cart.scss';
import { Delivery } from './Delivery/Delivery';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const [showDelivery, setShowDelivery] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    setCartItems(userCart);
  }, []);

  const handleRemoveItem = (itemId, size) => {
    const updatedCart = cartItems.filter(
      item => item.itemId !== itemId || item.size !== size
    );
    setCartItems(updatedCart);
    const userId = localStorage.getItem('userId');
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
    console.log('Item removed from cart:', itemId);
  };

  const handleIncrement = (itemId, size) => {
    const updatedCart = cartItems.map(item => {
      if (item.itemId === itemId && item.size === size) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    const userId = localStorage.getItem('userId');
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };

  const handleDecrement = (itemId, size) => {
    const updatedCart = cartItems.map(item => {
      if (item.itemId === itemId && item.size === size && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    const userId = localStorage.getItem('userId');
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  const clickLogin = () => {
    navigate('/login');
  };

  const handleBuy = () => {
    setShowDelivery(true);
  };

  const handleDeliverySubmit = deliveryData => {
    const userId = localStorage.getItem('userId');
    const order = {
      id: Date.now(),
      items: cartItems,
      source: 'Warsaw',
      destination: `${deliveryData.country}, ${deliveryData.city}, ${deliveryData.street}`,
    };
    const previousOrders = JSON.parse(localStorage.getItem(`orders_${userId}`)) || [];
    const updatedOrders = [...previousOrders, order];
    localStorage.setItem(`orders_${userId}`, JSON.stringify(updatedOrders));

    console.log('Order:', order);
    setCartItems([]);
    localStorage.setItem(`cart_${userId}`, JSON.stringify([]));
  };

  if (!isAuth) {
    return (
      <div className='block-none'>
        <h1 className='block-none__title'>Cart</h1>
        <p className='block-none__text'> Please log in to view your cart  items.</p>
        <button onClick={() => clickLogin()} className='block-none__btn'>Log In</button>        
      </div>
    );
  }

  return (
    <div className='cart'>
      <h1 className='cart__title'>Cart</h1>
      {cartItems.length > 0 ? (
        <div className='cart__block'>
          <ul className='cart__block__ul'>
            {cartItems.map(item => (
              <CartItem
                key={`${item.id}_${item.size}`}
                item={item}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
          </ul>
          
          <h3 className='cart__total'>Total Price: {getTotalPrice() / 100}</h3>
          <div className='cart-block'>
            <button onClick={handleBuy} className='cart__btn'>Buy</button>
          </div>
          
          {showDelivery && <Delivery handleSubmit={handleDeliverySubmit} />}
          
        </div>
      ) : (
          <p className='cart__none'>Your cart is empty.</p>
        
      )}
    </div>
  );
}

