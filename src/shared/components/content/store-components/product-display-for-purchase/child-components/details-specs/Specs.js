import React from 'react';
import './assets/css/specs.css';

const Specs = props => {
  return (
    <article id="specs">
      <header>
        <h3>Product Specs</h3>
      </header>
      <div className="col-50-50">
        <ul>
          <li>spec 1</li>
          <li>spec 2</li>
          <li>spec 3</li>
          <li>spec 4</li>
          <li>spec 5</li>
          <li>spec 6</li>
        </ul>
        <ul>
          <li>spec 1</li>
          <li>spec 2</li>
          <li>spec 3</li>
          <li>spec 4</li>
          <li>spec 5</li>
          <li>spec 6</li>
        </ul>
      </div>
    </article>
  );
};

export default Specs;
