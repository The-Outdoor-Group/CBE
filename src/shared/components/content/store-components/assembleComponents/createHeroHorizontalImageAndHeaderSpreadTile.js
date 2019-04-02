import React from 'react';
import loadable from '@loadable/component';

import '../assets/css/hero-horizontal-image-header-spread-tile.css';

const ImageTile = loadable( () => import('../image-tiles/ImageTile') );

const createHeroHorizontalImageAndHeaderSpreadTile = props => {
  const { title, tiles } = props;

  const imageTileNodes = () => tiles.map( (tile, i) => <ImageTile key={i} data={{ title: tile.title, image: tile.image }} />);

  return (
    <article className="hero-horizontal-image-header-spread-tile">
      <header>
        <h1>{ title }</h1>
      </header>
      { imageTileNodes() }
    </article>
  );
};

export default createHeroHorizontalImageAndHeaderSpreadTile;
