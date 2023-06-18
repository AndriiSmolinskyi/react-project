import "./Order.scss"

export const Order = () => {
   const userId = localStorage.getItem('userId');
   const orders = JSON.parse(localStorage.getItem(`orders_${userId}`)) || [];
 
   return (
     <div className="order">
       <h1 className="order__title">Order</h1>
       {orders.length > 0 ? (
         <div className="order__block">
           {orders.map(order => (
             <div key={order.id} className="order__block__list">
              <div className="delivery">
                <p>From: {order.source}</p>
                <p>To: {order.destination}</p>
              </div>
               
              <ul className="order__block__ul">
                 {order.items.map(item => (
                   <li key={`${item.id}_${item.size}`} className="order__block__li">
                    <div className="order__block__pic">
                      <img src={item.picture} alt="" />
                    </div>
                    <div className="order__block__text">
                      <div className="order__block__info">{item.name}</div>
                      <div className="order__block__info price"> Price: {(item.price*item.quantity) / 100}$</div>   
                      <div className="order__block__info">Quantity: {item.quantity}</div>   
                    </div>                                                         
                   </li>
                 ))}
              </ul>               
            </div>
           ))}
         </div>
       ) : (
         <p>Your order is empty</p>
       )}
     </div>
   );
 };

