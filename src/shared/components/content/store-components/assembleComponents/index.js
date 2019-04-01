import React from 'react';
import createHeroHorizontalFullImageSlider from './createHeroHorizontalFullImageSlider';
import createHeroImageTileSlider from './createHeroImageTileSlider';
import createHeroHorizontalTwoTiles from './createHeroHorizontalTwoTiles';
import createHeroVerticalTilesOneLeftTwoRight from './createHeroVerticalTilesOneLeftTwoRight';

const assembleComponent = props => {
  const { type, content } = props;

  switch( type ) {
    case 'heroHorizontalFullImageSlider':
      return createHeroHorizontalFullImageSlider(content);

    case 'heroImageTileSlider':
      return createHeroImageTileSlider(content);

    case 'heroHorizontalTwoTiles':
      return createHeroHorizontalTwoTiles(content);

    case 'heroVerticalTilesOneLeftTwoRight':
      return createHeroVerticalTilesOneLeftTwoRight(content);

    default:
      return null;
  }
};

export default assembleComponent;
