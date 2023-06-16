// import { useNavigate } from "react-router-dom";

// export const CartItem = ({ item, handleDecrement, handleIncrement, handleRemoveItem}) => {
//    const navigate = useNavigate();

//    function clickFull(id){
//       navigate(`/shoesfull/${id}`);
//     }
//    return (
//      <li className="item">
//       <span onClick={() => clickFull(item.id)}>
//          <img src={item.main_picture_url} alt="" />
//          <p>Name: {item.name}</p>
//          <p>Size: {item.size}</p>
//          <p>Price: {(item.price * item.quantity) / 100}</p>
//       </span>
//       <p>Quantity: {item.quantity}</p>
//       <button onClick={() => handleDecrement(item.itemId, item.size)}>-</button>
//       <button onClick={() => handleIncrement(item.itemId, item.size)}>+</button>
//       <button onClick={() => handleRemoveItem(item.itemId, item.size)}>Remove</button>
//      </li>
//    );
//  };


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CartItem = ({ item, handleDecrement, handleIncrement, handleRemoveItem }) => {
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('/json/api.json');
        const { sneakers } = response.data;
        const foundItem = sneakers.find((sneaker) => sneaker.id === item.id);
        if (foundItem) {
          setImageUrl(foundItem.main_picture_url);
        }
      } catch (error) {
        console.log('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [item.id]);

  const clickFull = (id) => {
    navigate(`/shoesfull/${id}`);
  };

  return (
    <li className="item">
      <span onClick={() => clickFull(item.id)}>
        <img src={imageUrl} alt="" />
        <p>Name: {item.name}</p>
        <p>Size: {item.size}</p>
        <p>Price: {(item.price * item.quantity) / 100}</p>
      </span>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => handleDecrement(item.itemId, item.size)}>-</button>
      <button onClick={() => handleIncrement(item.itemId, item.size)}>+</button>
      <button onClick={() => handleRemoveItem(item.itemId, item.size)}>Remove</button>
    </li>
  );
};

