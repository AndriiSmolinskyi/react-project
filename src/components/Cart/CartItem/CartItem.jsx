

import './CartItem.scss'

export const CartItem = ({ item, handleDecrement, handleIncrement, handleRemoveItem }) => {
  // const navigate = useNavigate();

  // function clickFull(id){
  //   navigate(`/shoesfull/${id}`);
  // }
  // onClick={() => clickFull(item.id)}

  return (
    <li className="item">
      <div className="full">
        <div className='item__picture' >
          <img src={item.picture} alt="" className='item__picture__img'/>
        </div> 
        <span className='item__block'>             
          <p className='item__bane item__block__info'>Name: {item.name}</p>
          <p className='item__size item__block__info'>Size: {item.size}</p>
          <p className='item__price item__block__info'>Price: {(item.price * item.quantity) / 100}$</p>
        </span>
      </div>

      <div className="btn__block">
        
        <div className="count__btn">
          <button onClick={() => handleIncrement(item.itemId, item.size)} className='item__btn'>+</button>
          <p className='item__btn'>{item.quantity}</p>
          <button onClick={() => handleDecrement(item.itemId, item.size)} className='item__btn'>-</button>  
          <button onClick={() => handleRemoveItem(item.itemId, item.size)} className='item__btn remove'>remove</button>                  
        </div>  
                
      </div>      
    </li>
  );
};

