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
        <div className="col-70-30">
          <ProductImageGallery />
          <ProductPurchase />
        </div>
      </section>
      <section className="width-85">
        <RelatedProducts title={"Complete The Look"} />
        <ProductDetails />
        <ProductVideos />
        <RelatedProducts title={"Related Poducts"} />
      </section>
    </>
  );
};

export default ProductDisplay;


/*
<AssociativeApparel /> - will have intelligence to query for matching hat and shirt color/camo pattern
 => will be a "Complete The Look" component - show pic and price -- want to entice clicking around
will need a way to capture url so can easily navigate back to main product
*/
