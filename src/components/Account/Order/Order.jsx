// import React from 'react';

// export const Order = () => {
//   const order = localStorage.getItem('order');
//   const orderItems = (order && JSON.parse(order).items) || [];
//   const source = (order && JSON.parse(order).source) || 'Warsaw';
//   const destination = (order && JSON.parse(order).destination) || 'City, Street';

//   const totalPrice = orderItems.reduce(
//     (total, item) => total + Number(item.price) * item.quantity,
//     0
//   );

//   return (
//     <div>
//       <h1>Order</h1>
//       <p>From: {source}</p>
//       <p>To: {destination}</p>
//       {orderItems.length > 0 ? (
//         <div>
//           <ul>
//             {orderItems.map(item => (
//               <li key={`${item.id}_${item.size}`}>
//                <img src={item.picture} alt="" />
//                {console.log(item.picture)}
//                {console.log(item.name)}
//                {item.name} - Quantity: {item.quantity} - Price: {item.price/100}
//               </li>
//             ))}
//           </ul>
//           <p>Total Price: {totalPrice / 100}</p>
//         </div>
//       ) : (
//         <p>Your order is empty</p>
//       )}
//     </div>
//   );
// };




import React from 'react';

export const Order = () => {
  const order = localStorage.getItem('order');
  const orderItems = (order && JSON.parse(order).items) || [];
  const source = (order && JSON.parse(order).source) || 'Warsaw';
  const destination = (order && JSON.parse(order).destination) || 'City, Street';

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
              <li key={`${item.id}_${item.size}`}>
               <img src={item.picture} alt="" />
               {item.name} - Quantity: {item.quantity} - Price: {item.price/100}
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
