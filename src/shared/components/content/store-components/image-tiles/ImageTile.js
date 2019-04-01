import React from 'react';
import loadable from '@loadable/component';

import './assets/css/image-tile.css';

const Image = loadable( () => import('../../hero-components/Image') );

const ImageTile = (props) => {
  /*
    props should be:

    Image: object-fit - cover or contain -- will be a cssClassName prop passed in

    title: position - top 50% or bottom 5%; -- will be a cssClassName prop passed in
  */
  return (
    <div className="image-tile">
      <Image data={}
      <p className={}>{}</p>
    </div>
  );
};

export default ImageTile;

// <img src={} className={} alt={} />
