import React from 'react';
import loadable from '@loadable/component';

const HorizontalImageSlider = loadable( () => import('../container/HorizontalImageSlider') );

const createMoreInfoHorizontalImageSlider = (props) => {
  const { headerArticles } = props;
  return <HorizontalImageSlider articles={headerArticles} />;
};

export default createMoreInfoHorizontalImageSlider;
