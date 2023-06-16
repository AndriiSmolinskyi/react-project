import React, { useState, useEffect } from "react";
import { useAuth } from "hooks/use-auth";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const userCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    setCartItems(userCart);
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    const userId = localStorage.getItem("userId");
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
    console.log("Item removed from cart:", itemId);
  };

  function clickLogin() {
    navigate("/login");
  }

  const handleIncrement = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    const userId = localStorage.getItem("userId");
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };

  const handleDecrement = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    const userId = localStorage.getItem("userId");
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  if (!isAuth) {
    return (
      <div>
        <h1>Cart</h1>
        <p>Please log in to view your cart items.</p>
        <button onClick={() => clickLogin()}>Log In</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <p>Name: {item.name}</p>
                <p>Price: {(item.price * item.quantity) / 100}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <button onClick={() => handleIncrement(item.id)}>+</button>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: {getTotalPrice()/100}</p>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};