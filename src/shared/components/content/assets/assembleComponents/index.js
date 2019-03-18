import React from 'react';
import createHeroHorizontalWholeComponent from './createHeroHorizontalWholeComponent';
import createHeroVerticalQuarterArticleThreeQuarterMediaComponent from './createHeroVerticalQuarterArticleThreeQuarterMediaComponent';
import createHeroHorizontalThreeQuarterMediaQuarterArticleComponent from './createHeroHorizontalThreeQuarterMediaQuarterArticleComponent';
import createHeroVerticalThreeQuarterMediaQuarterArticleComponent from './createheroVerticalThreeQuarterMediaQuarterArticleComponent';

const assembleComponent = (props) => {

  const { type } = props;

  switch(type) {

    case 'heroHorizontalWhole':
     return createHeroHorizontalWholeComponent(props);

    case 'heroVerticalQuarterArticleThreeQuarterMedia':
      return createHeroVerticalQuarterArticleThreeQuarterMediaComponent(props);

    case 'heroHorizontalThreeQuarterMediaQuarterArticle':
      return createHeroHorizontalThreeQuarterMediaQuarterArticleComponent(props);

    case 'heroVerticalThreeQuarterMediaQuarterArticle':
      return createHeroVerticalThreeQuarterMediaQuarterArticleComponent(props);

    default:
      return null;
  }
}

export default assembleComponent;
