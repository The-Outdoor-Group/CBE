import React from 'react';

const VariantSelector = props => {
  return (
    <article>
      <header>
        <h4>Variant Title (size)</h4>
      </header>
      <ul className="variant-selections">
        <li>S</li>
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
