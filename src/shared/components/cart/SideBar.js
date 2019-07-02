import React from 'react';
import loadable from '@loadable/component';
import './assets/css/sidebar.css';

const OrderSummary = loadable( () => import('./order-parts/OrderSummary') );

const SideBar = props => {
  return (
    <div className="sidebar">
      <OrderSummary />
    </div>
  );
}

export default SideBar;

// put a child container or more components based on parts of line items or messaging
// <h3>show promo if empty or items if items are in cart</h3>
