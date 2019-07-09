import React from 'react';
import loadable from '@loadable/component';
import './../assets/css/product-description.css';

const Dropdown = loadable( () => import('./variant-selector/Dropdown') );

const ProductDescription = props => {
  return (
    <article id="product-description">
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

      </form>
    </article>
  );
};

export default ProductDescription;
