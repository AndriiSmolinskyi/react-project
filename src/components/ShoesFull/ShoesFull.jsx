import React from 'react';
import { useParams } from 'react-router-dom';

export const ShoesFull = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Shoes Full</h1>
      <p>Id: {id}</p>
    </div>
  );
};