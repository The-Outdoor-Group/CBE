import React from 'react';
import loadable from '@loadable/component';

import './assets/css/image-tile.css';

const Image = loadable( () => import('../../hero-components/Image') );

const ImageTile = (props) => {
  const { title, image } = props.data;
  const { src, alt } = image;

  return (
    <div className="image-tile">
      <Image data={ {src, alt} } />
      <header>{ title }</header>
    </div>
  );
};

export default ImageTile;
