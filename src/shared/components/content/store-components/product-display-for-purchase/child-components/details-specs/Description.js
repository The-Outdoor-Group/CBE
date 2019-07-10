import React from 'react';
import './assets/css/product-description.css';

const Description = props => {
  return (
    <article className="col-50-50" id="product-description">
      <div>
        <header>
        <h3>Product Title</h3>
        <h4>Product Description in summary.</h4>
        </header>
        <p>This is a paragraph describing this product.</p>
      </div>
      <img src="https://via.placeholder.com/325x300" />
    </article>
  );
};

export default Description;
