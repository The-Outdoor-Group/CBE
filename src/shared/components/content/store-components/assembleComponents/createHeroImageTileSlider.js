import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import { Carousel } from 'react-responsive-carousel';
import isWindowSizeMobile from '../../../../utilities/isWindowSizeMobile';

import '../assets/css/hero-image-tile-slider.css';

const ImageTile = loadable( () => import('../image-tiles/ImageTile') );


const createHeroImageTileSlider = props => {

  const [isMobile, setIsMobile] = useState(null);

  // useEffect(() => {
  //   setIsMobile( isWindowSizeMobile() );
  //   console.log('isMobile: ', isMobile);
  // });

  const { tiles, title } = props;
  const imageTileNodes = () => tiles.map( (tile, i) => <div className="container" key={i}><ImageTile data={tile} /></div> );

  return (
    <article className="hero-image-tile-slider">
      <header>
        <h1>{ title }</h1>
      </header>
       <Carousel
          autoPlay
          showArrows
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          stopOnHover
          swipeable
          centerMode
          interval={4000}
          transitionTime={750}
        >
        { imageTileNodes() }
       </Carousel>
    </article>
  );
};

export default createHeroImageTileSlider;
