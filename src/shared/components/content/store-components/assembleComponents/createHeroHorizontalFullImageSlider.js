import React from 'react';
import loadable from '@loadable/component';
import '../assets/css/hero-horizontal-full-image-slider.css';

const ImageTile = loadable( () => import('../image-tiles/ImageTile') );

const createHeroHorizontalFullImageSlider = props => {
  const { tiles } = props;
  const tile = tiles[0];
  const image = tile.image;
  const title = tile.title;

  return (
    <article className="hero-horizontal-full-image-slider">
      <ImageTile data={{ title, image }} />
    </article>
  );
};

export default createHeroHorizontalFullImageSlider;
