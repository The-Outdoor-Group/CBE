import React from 'react';
import loadable from '@loadable/component';

import './assets/css/product-display.css';

const Breadcrumbs = loadable( () => import('./child-components/Breadcrumbs') );
const ProductImageGallery = loadable( () => import('./child-components/image-gallery/ProductImageGallery') );
const ProductPurchase = loadable( () => import('./child-components/ProductPurchase') );
const ProductDetails = loadable( () => import('./child-components/ProductDetails') );
const ProductVideos = loadable( () => import('./child-components/ProductVideos') );
const RelatedProducts = loadable( () => import('./child-components/RelatedProducts') );

const ProductDisplay = props => {
  return (
    <>
      <section className="clear-main-nav" id="product-display">
        <Breadcrumbs />
        <div className="col-60-40">
          <ProductImageGallery />
          <ProductPurchase />
        </div>
      </section>
      <section>
        <ProductDetails />
      </section>
      <section>
        <ProductVideos />
      </section>
      <section>
        <RelatedProducts />
      </section>
    </>
  );
};

export default ProductDisplay;
