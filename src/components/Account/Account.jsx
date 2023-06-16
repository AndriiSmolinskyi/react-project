
import React, { useState } from 'react';
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';
import { Order } from './Order/Order';
import { Navigate } from 'react-router-dom';

export const Account = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  const [showOrder, setShowOrder] = useState(false);

  const handleLogout = () => {
    dispatch(removeUser());
  };

  const handleOrderClick = () => {
    setShowOrder(true);
  };

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleLogout}>Log out from {email}</button>
      <button onClick={handleOrderClick}>Your order</button>
      {showOrder && <Order />}
    </div>
  );
};


