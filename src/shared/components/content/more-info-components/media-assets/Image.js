import React from 'react';

export const Image = (props) => {
  const { src, alt } = props.data;
  return <img className="sixty-percent-h" style={{ width: '100%', height: '30rem' }} src={src} alt={alt} />
};

export default Image;
