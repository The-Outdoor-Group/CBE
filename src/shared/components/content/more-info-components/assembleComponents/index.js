import React from 'react';
import createMoreInfoHorizontalTopArticleBottomMediaFooterArticleComponent from './createMoreInfoHorizontalTopArticleBottomMediaFooterArticleComponent';
import createMoreInfoHorizontalLeftMediaRightArticleComponent from './createMoreInfoHorizontalLeftMediaRightArticleComponent';
import createMoreInfoHorizontalImageSliderComponent from './createMoreInfoHorizontalImageSliderComponent';

const assembleComponent = (data) => {
  const { props } = data;
  const { type, content } = props;

  switch(type) {
    case 'moreInfoHorizontalTopArticleBottomMedia':
      return createMoreInfoHorizontalTopArticleBottomMediaFooterArticleComponent(content);

    case 'moreInfoHorizontalLeftMediaRightArticle':
      return createMoreInfoHorizontalLeftMediaRightArticleComponent(content);

    case 'moreInfoHorizontalImageSlider':
      return createMoreInfoHorizontalImageSliderComponent(content);

    default:
      return null;
  }
}

export default assembleComponent;

// import('./createMoreInfoHorizontalTopArticleThirdsBottomMediaComponent')
//   .then( module => module.createComponent(content) )
//   .then( result => result );
// break;
