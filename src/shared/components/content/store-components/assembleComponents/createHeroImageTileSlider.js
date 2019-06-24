import React from 'react';
import loadable from '@loadable/component';
import { Carousel } from 'react-responsive-carousel';

import '../assets/css/hero-image-tile-slider.css';

const ImageTile = loadable( () => import('../image-tiles/ImageTile') );

const createHeroImageTileSlider = props => {

  const { tiles, title } = props;
  const imageTileNodes = () => tiles.map( (tile, i) => <div key={i}><ImageTile data={tile} /></div> );

  return (
    <article className="hero-image-tile-slider">
      <header>
        <h1>{ title }</h1>
      </header>
       <Carousel
          showArrows
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          stopOnHover
          swipeable
          emulateTouch
          centerMode
        >
        { imageTileNodes() }
       </Carousel>
    </article>
  );
};

export default createHeroImageTileSlider;

// autoPlay={true}
