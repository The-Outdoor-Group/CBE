import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import { Carousel } from 'react-responsive-carousel';
import { useResize } from '../../../../utilities/shared-hooks/useResize';

import '../assets/css/hero-image-tile-slider.css';

const ImageTile = loadable( () => import('../image-tiles/ImageTile') );


const createHeroImageTileSlider = props => {

  const [showDesktopSlider, setShowDesktopSlider] = useState(null);

  var notMobile;

  const getMobileSizeResult = () => useResize( window );

  if (process.env.IS_BROWSER) {
    notMobile = getMobileSizeResult();
  }

  useEffect(() => {
    if (notMobile !== null) setShowDesktopSlider(!notMobile); // !notMobile means show;
  });


  const { tiles, title } = props;
  const imageTileNodes = () => tiles.map( (tile, i) => <div className="container" key={i}><ImageTile data={tile} /></div> );

  const showProperDisplay = () => {
    if (showDesktopSlider) {
      return imageTileNodes();
    } else {
      return (<Carousel
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
      </Carousel>);
    }
  }

  return (
    <article className="hero-image-tile-slider">
      <header>
        <h1>{ title }</h1>
      </header>
      <div className="tile-wrapper">
      { showProperDisplay() }
      </div>
    </article>
  );
};

export default createHeroImageTileSlider;
