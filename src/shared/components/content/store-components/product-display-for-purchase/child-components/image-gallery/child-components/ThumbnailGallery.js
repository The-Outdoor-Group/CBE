import React from 'react';


const displayThumbs = () => [1, 2, 3, 4, 5, 6, 7].map( (thumb, i) => <li key={i}><img src="https://via.placeholder.com/50x50" /></li> );

const ThumbnailGallery = props => {
  return (
    <ul className="vertical-thumbnails">
      { displayThumbs() }
    </ul>
  );
};

export default ThumbnailGallery;
