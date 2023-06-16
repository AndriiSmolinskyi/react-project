
export const Order = () => {
   const userId = localStorage.getItem('userId');
   const orders = JSON.parse(localStorage.getItem(`orders_${userId}`)) || [];
 
   return (
     <div>
       <h1>Order</h1>
       {orders.length > 0 ? (
         <div>
           {orders.map(order => (
             <div key={order.id}>
               <p>From: {order.source}</p>
               <p>To: {order.destination}</p>
               <ul>
                 {order.items.map(item => (
                   <li key={`${item.id}_${item.size}`}>
                     <img src={item.picture} alt="" />
                     {item.name} - Quantity: {item.quantity} - Price: {(item.price*item.quantity) / 100}
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

