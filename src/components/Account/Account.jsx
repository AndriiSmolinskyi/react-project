import React, { useState } from 'react';
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';
import { Order } from './Order/Order';
import { Navigate } from 'react-router-dom';
import './Account.scss';

export const Account = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  const [showOrder, setShowOrder] = useState(false);

  const handleLogout = () => {
    dispatch(removeUser());
  };

  const handleOrderClick = () => {
    setShowOrder(prevState => !prevState);
  };

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className='account'>
      <h1 className='account__title'>Welcome</h1>
      <div><button onClick={handleLogout} className='account__btn'>Log out from {email}</button></div>
      <div><button onClick={handleOrderClick} className='account__btn'>Your order</button></div>
      {showOrder && <Order />}
    </div>
  );
};