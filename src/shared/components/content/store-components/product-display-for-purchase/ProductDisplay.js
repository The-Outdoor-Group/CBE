import React, { Component } from 'react';
import loadable from '@loadable/component';

import './assets/css/product-display.css';

const VariantSelector = loadable( () => import('./child-components/VariantSelector') );
const ProductImage = loadable( () => import('./child-components/ProductImage') );

class ProductDisplay extends Component {
  constructor() {
    super();

    this.handleShowHiRes = this.handleShowHiRes.bind(this);
  }

  handleShowHiRes(img) {
    console.log(`In Parent, activate the modal with the high res img: ${img.src}`);
  }

  render() {
    return (
      <article className="product-display">

        <div> {/* right column of text data */}

          <div className="product-purchase-wrapper"> {/* top product title, price, quantity want to buy, add to cart button  */}
            <header>
              <h1>Product Title</h1>
            </header>

            <p className="price">$100</p>

            <VariantSelector />

            <button>Add To Cart</button>
          </div>

          <div className="product-description"> {/* product description */}
           <header>
             <h2>Description</h2>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
           </header>
          </div>

        </div>


        {/* left column of pics; will need ability to view larger image onclick */}
        <ul className="product-gallery-wrapper">
          <ProductImage showHiRes={this.handleShowHiRes} />
          <ProductImage showHiRes={this.handleShowHiRes} />
          <ProductImage showHiRes={this.handleShowHiRes} />
        </ul>

      </article>
    );
  }
}

export default ProductDisplay;

/*
  - will need to read the props coming in, if shirt, needs a size picker component
  - will need a color picker for variant
  - will need a quantity - num +

  Product Variants:
    Sight:
      - hand orientation
      - pin size
      - pin count (some have)
      - color (some have)

    Stabilizers:
      - length (some have)

    Quivers:
      - no variants

  Apparel Variants:
    Hoodie/shirt:
      - size

    Hats:
      - no variants

  Accessories Variants:
   - no variants

*/
