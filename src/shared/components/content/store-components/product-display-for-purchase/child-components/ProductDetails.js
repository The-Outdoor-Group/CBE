import React, { useState } from 'react';
import loadable from '@loadable/component';

import './../assets/css/product-details.css';

const Description = loadable( () => import('./details-specs/Description') );
const Specs = loadable( () => import('./details-specs/Specs') );
const Instructions = loadable( () => import('./details-specs/Instructions') );

const ProductDetails = props => {

  const [ activeDisplay, setActiveDisplay ] = useState('description');

  const showActiveDisplay = () => {
    switch(activeDisplay) {
      case 'description':
        return <Description />;

      case 'specifications':
        return <Specs />;

      case 'instructions':
        return <Instructions />;
    }
  };

  const setStyle = val => activeDisplay === val ? ({ border: '1px solid #000', background: '#000', color: '#fff' }) : null;

  return (
    <article id="product-details">
      <header>
        <h2>Product Details</h2>
      </header>
      <div style={{ textAlign: 'center' }}>
        <button onClick={ () => setActiveDisplay('description') } style={ setStyle('description') }>Description</button>
        <button onClick={ () => setActiveDisplay('specifications') } style={ setStyle('specifications') }>Specifications</button>
        <button onClick={ () => setActiveDisplay('instructions') } style={ setStyle('instructions') }>Instructions</button>
      </div>
      { showActiveDisplay() }
    </article>
  );
};

export default ProductDetails;
