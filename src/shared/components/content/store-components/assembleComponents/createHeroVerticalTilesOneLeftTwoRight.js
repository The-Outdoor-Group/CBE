import React from 'react';
import loadable from '@loadable/component';

import '../assets/css/hero-vertical-tiles-one-left-two-right.css';

const ImageTile = loadable( () => import('../image-tiles/ImageTile') );

const createHeroVerticalTilesOneLeftTwoRight = props => {
  console.log('props: ', props);
  const { title, tiles } = props;

  const imageTileNodes = () => tiles.map( (tile, i) => <ImageTile key={i} data={{ title: tile.title, image: tile.image }} />);

  return (
    <article className="hero-vertical-tiles-one-left-two-right">
      <header>
        <h1>{ title }</h1>
      </header>
      <div className="image-tile-nodes-wrapper">
        { imageTileNodes() }
      </div>
    </article>
  );
};

export default createHeroVerticalTilesOneLeftTwoRight;
