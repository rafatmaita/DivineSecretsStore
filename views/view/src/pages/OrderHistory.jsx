import React, { useState, useEffect } from 'react';
import orderData from './orderData.json';

function OrderHistory() {
  const cardWidth = 300;
  const screenWidth = window.innerWidth; 
  const cardsPerRow = Math.floor(screenWidth / cardWidth); 

  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    
    setUserOrders(orderData);
  }, []);

  return (
    <div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {userOrders.map(order => (
          <div key={order.id} style={{ width: `${100 / cardsPerRow}%`, padding: '16px' }}>
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
              <img src={order.image} alt={order.product} style={{ width: '100%' }} />
              <p>{order.product}</p>
              <p>Price: {order.price}</p>
              <p>Date: {order.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
