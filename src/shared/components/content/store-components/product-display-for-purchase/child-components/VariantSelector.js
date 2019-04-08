/*
  For each variant, the options key will have a value that is an array of objects.
  Each object will have a name key with a value of that variant title, and a values key with the choices for that variant.

  Based on options clicked, search the variants,edges node objects for a match. If finds all matching criteria, then add to cart. else {
    display a message otherwise. Perhaps filtering an array in memory as choices are made. The parent will have the array to manage
  }
*/

import React from 'react';

const VariantSelector = props => {
  return (
    <article>
      <header>
        <h4>Variant Title (size)</h4>
      </header>
      <ul className="variant-selections">
        <li>S</li> // based on clicking on the options, find the matching node
        <li>M</li>
        <li>L</li>
        <li>XL</li>
        <li>XXL</li>
      </ul>
      <p className="guide-link">Size Guide</p>
    </article>
  );
};

export default VariantSelector;
