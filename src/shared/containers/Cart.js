import React from 'react';
import loadable from '@loadable/component';

const FinancingAd = loadable( () => import('./../components/cart/FinancingAd') );
const EmptyCartMessage = loadable( () => import('./../components/cart/EmptyCartMessage') );
const SideBar = loadable( () => import('./../components/cart/SideBar') );
const RecommendedItems = loadable( () => import('./../components/cart/RecommendedItems') );

const Cart = props => {
  return (
    <section id="cart" style={{marginTop: '80px'}}>
      <FinancingAd />
      <EmptyCartMessage />
      <SideBar />
      <RecommendedItems />
    </section>
  );
};

export default Cart;
