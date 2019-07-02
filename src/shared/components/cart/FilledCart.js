import React from 'react';
import loadable from '@loadable/component';

import './assets/css/filled-cart.css';

const LineItem = loadable( () => import('./order-parts/LineItem') );

const buildLineItems = () => [1, 2, 3].map((lineItem, i) => <LineItem /> );

const FilledCart = props => {
  return (
    <article className="cart-message">
     <header>
       <h1>Your Cart</h1>
     </header>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/* this is where each LineItem would be created in a map */}
          { buildLineItems() }
        </tbody>
      </table>
    </article>
  );
}

export default FilledCart;


/*
  This will be the container that holds the line items of the cart.

  If there are items in the cart, then this component is rendered. Its children
  will be LineItem;

  I will have to use a table with rows to display the content properly
*/
