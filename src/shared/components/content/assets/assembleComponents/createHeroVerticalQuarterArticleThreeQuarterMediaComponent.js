import React from 'react';
import loadable from '@loadable/component'

const TextArticle = loadable( () => import('./../../hero/TextArticle') );

import './../css/hero-vertical-quarter-article-three-quarter-media.css';

const createHeroVerticalQuarterArticleThreeQuarterMediaComponent = (props) => {
  const { cssClass, textArticle } = props;

  return (
    <article className="hero-vertical-quarter-article-three-quarter-media">
      <TextArticle copy={textArticle}  colorTheme={cssClass} />

      {/* will be another component; will be image or video */}
      <div>
        <img style={{width: '100%'}} src="https://via.placeholder.com/975x800" />
      </div>

    </article>
  );
};

export default createHeroVerticalQuarterArticleThreeQuarterMediaComponent;
