import React from 'react';
import createHeroHorizontalWholeComponent from './createHeroHorizontalWholeComponent';
import createHeroVerticalQuarterArticleThreeQuarterMediaComponent from './createHeroVerticalQuarterArticleThreeQuarterMediaComponent';
import createHeroHorizontalThreeQuarterMediaQuarterArticleComponent from './createHeroHorizontalThreeQuarterMediaQuarterArticleComponent';
import createHeroVerticalThreeQuarterMediaQuarterArticleComponent from './createHeroVerticalThreeQuarterMediaQuarterArticleComponent';
import createHeroVerticalHalfMediaHalfArticleComponent from './createHeroVerticalHalfMediaHalfArticleComponent';

const assembleComponent = (data) => {

  const { props, showInfo } = data;
  const { type } = props;

  switch(type) {

    case 'heroHorizontalWhole':
     return createHeroHorizontalWholeComponent(props);

    case 'heroVerticalQuarterArticleThreeQuarterMedia':
      return createHeroVerticalQuarterArticleThreeQuarterMediaComponent(props, showInfo);

    case 'heroHorizontalThreeQuarterMediaQuarterArticle':
      return createHeroHorizontalThreeQuarterMediaQuarterArticleComponent(props, showInfo);

    case 'heroVerticalThreeQuarterMediaQuarterArticle':
      return createHeroVerticalThreeQuarterMediaQuarterArticleComponent(props, showInfo);

    case 'heroVerticalHalfMediaHalfArticle':
      return createHeroVerticalHalfMediaHalfArticleComponent(props);

    default:
      return null;
  }
}

export default assembleComponent;
