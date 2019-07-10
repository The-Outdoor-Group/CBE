import React from 'react';
import './../assets/css/current-image.css';

const CurrentImage = props => {
  return (
    <div id="current-product-image-wrapper">
      <p>left</p>
      <img src="https://via.placeholder.com/400x300" /> {/* onHover change this to a custom cursor circle with 2 arrows pointing out, so know can zoom in */}
      <p>right</p>
    </div>
  );
};

export default CurrentImage;


/*
  needs to be a component that
  - has svg arrows to navigate
  - transparent pic is in the middle
  - has the ability to change cursor to zoom in on pic in a modal
*/
