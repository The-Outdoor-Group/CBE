import React from 'react';

import './assets/css/recommended-items.css';

// recommended will include recently viewed items

const RecommendedItems = props => {
  return (
    <section className="recently-viewed-recommendations">
      <article>
        <header><h2>Your Recently Viewed and Recommendations</h2></header>

        <article className="recently-viewed">
          <header><h4>Recently viewed</h4></header>
          <ul>

            <li>
              <div>
                <img src="https://via.placeholder.com/135x135" />
                <h5>Product Title</h5>
                <p>$xx.xx</p>
                <button>Add to Cart</button>
              </div>
            </li>

          </ul>
        </article>

        <article className="recommended-products">
          <header><h4>Products you may like</h4></header>
          <ul>

            <li>
              <div>
                <img src="https://via.placeholder.com/135x135" />
                <h5>Product Title</h5>
                <p>$xx.xx</p>
                <button>Add to Cart</button>
              </div>
            </li>

          </ul>
        </article>

      </article>
    </section>
  );
}

export default RecommendedItems;
