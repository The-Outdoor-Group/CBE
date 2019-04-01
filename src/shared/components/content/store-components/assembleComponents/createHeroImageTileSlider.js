import React from 'react';

const createHeroImageTileSlider = props => {
  const { title } = props;
  return (
    <article className="hero-image-tile-slider">
      <header>
        <h1>{ title }</h1>
      </header>
    </article>
  );
};

export default createHeroImageTileSlider;
