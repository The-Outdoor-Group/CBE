import React from 'react';
import './../assets/css/order-summary.css';

const OrderSummary = props => {
  return (
    <div id="order-summary">
      <button>Proceed To Checkout</button>
      <dl>
        <dt>Order Summary</dt>
        <dd><span>Items:</span>${"xx.xx"}</dd>
        <dd><span>Discount:</span>${"xx.xx"}</dd>
        <dd><span>Order Total:</span>${"xx.xx"}</dd>
      </dl>
    </div>
  );
};

export default OrderSummary;
