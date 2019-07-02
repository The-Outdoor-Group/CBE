import React from 'react';
import { Link } from 'react-router-dom';

import './assets/css/empty-cart-message.css';

const EmptyCartMessage = props => {
  return (
    <article className="cart-message">
      <header>
        <h1>Your Shopping Cart is empty.</h1>
      </header>
      <p>Your Shopping Cart is here to serve you. Fill it with - {/* make a component/function based on brand or what collections are popular to link to */} sights, arrow rest, and more. Continue shopping on the <Link to="/shop">store</Link>, learn about Today's Deals, or visit your Wish List.</p>
      <p>Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
      <footer></footer>
    </article>
  );
};

export default EmptyCartMessage;
