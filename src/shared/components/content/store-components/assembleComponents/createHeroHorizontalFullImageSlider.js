import React from 'react';

const createHeroHorizontalFullImageSlider = props => {
  const { title } = props;
  return (
    <article className="hero-horizontal-full-image-slider">
      <header>
        <h1>{ title }</h1>
      </header>
    </article>
  );
};

export default createHeroHorizontalFullImageSlider;
