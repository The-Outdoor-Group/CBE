import React from 'react';

import loadable from '@loadable/component';

const Messaging = loadable( () => import('./../components/wishlist/Messaging') );
const FilledWishlist = loadable( () => import('./../components/wishlist/FilledWishlist') );
const WishlistRecommendedItems = loadable( () => import('./../components/wishlist/WishlistRecommendedItems') );

const Wishlist = props => {
  return (
    <section className="clear-main-nav" id="wishlist">
      <Messaging />
      <FilledWishlist />
      <WishlistRecommendedItems />
    </section>
  );
};

export default Wishlist;
