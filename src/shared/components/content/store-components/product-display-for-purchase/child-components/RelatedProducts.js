import React from 'react';

const RelatedProducts = props => {
  return (
    <article>
      <header>
        <h2>{props.title}</h2>
      </header>
      <ul>
        <li>
          <div>
            <img src="https://via.placeholder.com/135x135" />
            <p>$xx.xx</p>
          </div>
        </li>
      </ul>
    </article>
  );
};

export default RelatedProducts;

// <p>This will show a list of similar categories of product or supplies or apparel of product</p>
