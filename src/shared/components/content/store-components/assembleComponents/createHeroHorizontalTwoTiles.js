import React from 'react';
import loadable from '@loadable/component';

import '../assets/css/hero-horizontal-two-tiles.css';

const ImageTile = loadable( () => import('../image-tiles/ImageTile') );

const createHeroHorizontalTwoTiles = props => {
  const { title, tiles } = props;
  const imageTileNodes = () => tiles.map( (tile, i) => <li key={i}><ImageTile data={{ title: tile.title, image: tile.image }} /></li>);

  return (
    <article className="hero-horizontal-two-tiles">
      <header>
        <h1>{ title }</h1>
      </header>
      <ul>
        { imageTileNodes() }
      </ul>
    </article>
  );
};

export default createHeroHorizontalTwoTiles;
