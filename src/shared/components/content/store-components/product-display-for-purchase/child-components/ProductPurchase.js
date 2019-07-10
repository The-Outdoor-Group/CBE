import React from 'react';
import loadable from '@loadable/component';
import './../assets/css/product-purchase.css';

const Dropdown = loadable( () => import('./variant-selector/Dropdown') );

const ProductPurchase = props => {
  return (
    <article id="product-purchase">
      <header>
        <h3>Hunting Sight</h3>
        <h2>Engage Hybrid</h2>
        <p>$309.99</p>
      </header>
    {/*
      This is the config section:
       -- it will be comprised of pieces that depend on product and apparel
    */}
      <form>

        <Dropdown />

        <button>Add To Cart</button>
        <button>Add To Wishlist</button> {/* make an svg */}
      </form>
    </article>
  );
};

export default ProductPurchase;
