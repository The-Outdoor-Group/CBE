import React from 'react';
import loadable from '@loadable/component';

import './assets/css/product-display.css';

const Breadcrumbs = loadable( () => import('./child-components/Breadcrumbs') );
const ProductImageGallery = loadable( () => import('./child-components/image-gallery/ProductImageGallery') );
const ProductDescription = loadable( () => import('./child-components/ProductDescription') );

const ProductDisplay = props => {
  return (
    <section className="clear-main-nav" id="product-display">
      <Breadcrumbs />
      <div className="col-65-35">
        <ProductImageGallery />
        <ProductDescription />
      </div>
    </section>
  );
};

export default ProductDisplay;
