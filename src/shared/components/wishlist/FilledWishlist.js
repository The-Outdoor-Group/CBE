import React from 'react';
import loadable from '@loadable/component';

import './assets/css/filled-wishlist.css';

const WishlistLineItem = loadable( () => import('./WishlistLineItem') );

const buildLineItems = () => [1, 2, 3].map((lineItem, i) => <WishlistLineItem /> );

const FilledWishlist = props => {
  return (
    <article>
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
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td><button>Add More Items</button></td>
            <td><button>Share Your Wishlist</button></td>
          </tr>
        </tfoot>
      </table>
    </article>
  );
}

export default FilledWishlist;
