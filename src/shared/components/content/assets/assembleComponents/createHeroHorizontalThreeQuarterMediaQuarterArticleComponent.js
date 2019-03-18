import React from 'react';
import loadable from '@loadable/component';

const Stats = loadable( () => import('./../../hero/Stats') );
const TextArticle = loadable( () => import('./../../hero/TextArticle') );

import './../css/hero-horizontal-three-quarter-media-quarter-article.css';

const createHeroHorizontalThreeQuarterMediaQuarterArticleComponent = (props) => {
  const { cssClass, stats, textArticle } = props;

  return (
    <article className="hero-horizontal-three-quarter-media-quarter-article">
      <div className="image-full-width">
        <img src="https://via.placeholder.com/1380x600" />
        <Stats stats={stats} />
      </div>

      <TextArticle copy={textArticle} colorTheme={cssClass} />

    </article>
  );
};

export default createHeroHorizontalThreeQuarterMediaQuarterArticleComponent;
