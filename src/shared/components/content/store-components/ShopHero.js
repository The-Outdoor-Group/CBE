import React from 'react';
import assembleComponent from './assembleComponents';

import './assets/css/shop-hero.css';

const ShopHero = props => {
  const { data } = props;

  return (
    <section className="shop-hero-region">
      { assembleComponent(data) }
    </section>
  );
}

export default ShopHero;
