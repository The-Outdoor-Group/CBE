import React from 'react';
import loadable from '@loadable/component';

import './../components/cart/assets/css/cart.css';

const FinancingAd = loadable( () => import('./../components/cart/FinancingAd') );
const EmptyCartMessage = loadable( () => import('./../components/cart/EmptyCartMessage') );
const FilledCart = loadable( () => import('./../components/cart/FilledCart') );
const SideBar = loadable( () => import('./../components/cart/SideBar') );
const RecommendedItems = loadable( () => import('./../components/cart/RecommendedItems') );

const Cart = props => {
  return (
    <section id="cart">
      <FinancingAd />
      <FilledCart /> {/* will be conditional with EmptyCartMessage */}
      <SideBar />
      <RecommendedItems />
    </section>
  );
};

export default Cart;


// <EmptyCartMessage />
