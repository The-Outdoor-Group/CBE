import React from 'react';
import createMoreInfoHorizontalTopArticleThirdsBottomImageComponent from './createMoreInfoHorizontalTopArticleThirdsBottomImageComponent'

const assembleComponent = (data) => {
  const { props } = data;
  const { type, content } = props;

  console.log('content: ', content);

  switch(type) {
    case 'moreInfoHorizontalTopArticleThirdsBottomImage':
      return createMoreInfoHorizontalTopArticleThirdsBottomImageComponent(content);

    default:
      return null;
  }
}

export default assembleComponent;
