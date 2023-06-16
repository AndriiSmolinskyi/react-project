import { useNavigate } from "react-router-dom";

export const CartItem = ({ item, handleDecrement, handleIncrement, handleRemoveItem }) => {
   const navigate = useNavigate();

   function clickFull(id){
      navigate(`/shoesfull/${id}`);
    }
   return (
     <li className="item">
      <span onClick={() => clickFull(item.id)}>
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