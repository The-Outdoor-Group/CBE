import React from 'react';

import './../assets/css/image.css';

const Image = props => {
  const { alt, cssClass, src } = props.data;
  return <img src={src} alt={alt} className={cssClass} />;
};


export default Image;
