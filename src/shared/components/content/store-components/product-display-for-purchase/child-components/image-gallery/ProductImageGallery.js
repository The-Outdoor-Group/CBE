import React from 'react';
import loadable from '@loadable/component';

const ThumbnailGallery = loadable( () => import('./child-components/ThumbnailGallery') );
const CurrentImage = loadable( () => import('./child-components/CurrentImage') );

const ProductImageGallery = props => {
  return (
    <div className="col-10-90" style={{ backgroundColor: 'aliceblue', padding: '1rem' }}>
      <ThumbnailGallery />
      <CurrentImage />
    </div>
  );
};

export default ProductImageGallery;
