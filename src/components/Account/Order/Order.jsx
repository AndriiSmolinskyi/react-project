export const Order = () => {
   const order = localStorage.getItem('order');
   const orderItems = (order && JSON.parse(order).items) || [];
   const source = (order && JSON.parse(order).source) || 'Warsaw';
   const destination = (order && JSON.parse(order).destination) || 'Місто, Вулиця';
 
   const totalPrice = orderItems.reduce(
     (total, item) => total + Number(item.price) * item.quantity,
     0
   );
 
   return (
     <div>
       <h1>Order</h1>
       <p>From: {source}</p>
       <p>To: {destination}</p>
       {orderItems.length > 0 ? (
         <div>
           <ul>
             {orderItems.map(item => (
               <li key={`${item.itemId}_${item.size}`}>
                 {item.name} - Quantity: {item.quantity} - Price: {item.price}
               </li>
             ))}
           </ul>
           <p>Total Price: {totalPrice / 100}</p>
         </div>
       ) : (
         <p>Your order is empty</p>
       )}
     </div>
   );
 };


