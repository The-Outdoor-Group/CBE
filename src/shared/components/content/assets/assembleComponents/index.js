import React from 'react';
import createHeroHorizontalWholeComponent from './createHeroHorizontalWholeComponent';
import createHeroVerticalQuarterArticleThreeQuarterMediaComponent from './createHeroVerticalQuarterArticleThreeQuarterMediaComponent';
import createHeroHorizontalThreeQuarterMediaQuarterArticleComponent from './createHeroHorizontalThreeQuarterMediaQuarterArticleComponent';
import createHeroVerticalThreeQuarterMediaQuarterArticleComponent from './createheroVerticalThreeQuarterMediaQuarterArticleComponent';

const assembleComponent = (props, showInfo) => {

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

    default:
      return null;
  }
}

export default assembleComponent;
