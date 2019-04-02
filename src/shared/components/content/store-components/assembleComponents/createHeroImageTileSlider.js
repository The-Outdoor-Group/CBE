import React from 'react';
import loadable from '@loadable/component';
import '../assets/css/hero-image-tile-slider.css';

const ImageTile = loadable( () => import('../image-tiles/ImageTile') );

const createHeroImageTileSlider = props => {

  const { tiles, title } = props;
  const imageTileNodes = () => tiles.map( (tile, i) => <li key={i}><ImageTile data={tile} /></li> );

  return (
    <article className="hero-image-tile-slider">
      <header>
        <h1>{ title }</h1>
      </header>

      {/* This will need to be a separate stateful component so it knows where it is at */}
      <button>previous</button>
      <ul>{ imageTileNodes() }</ul> { /* will need to figure out the width by measuring how many children there are */}
      <button>next</button>
      {/* end component extraction */}

    </article>
  );
};

export default createHeroImageTileSlider;
