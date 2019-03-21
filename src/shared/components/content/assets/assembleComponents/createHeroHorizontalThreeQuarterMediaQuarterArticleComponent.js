import React from 'react';
import loadable from '@loadable/component';
import './../css/hero-horizontal-three-quarter-media-quarter-article.css';

const createHeroHorizontalThreeQuarterMediaQuarterArticleComponent = (props, showMoreInfo) => {
  const { cssClass, stats, textArticle, moreInfoHandle } = props;
  const Stats = loadable( () => import('./../../hero/Stats') );
  const TextArticle = loadable( () => import('./../../hero/TextArticle') );

  return (
    <article className="hero-horizontal-three-quarter-media-quarter-article">
      <div className="image-full-width">
        <img src="https://via.placeholder.com/1380x600" />
        <Stats stats={stats} />
      </div>

      <TextArticle showMoreInfo={showMoreInfo} copy={textArticle} colorTheme={cssClass} moreInfoHandle={moreInfoHandle} />

    </article>
  );
};

export default createHeroHorizontalThreeQuarterMediaQuarterArticleComponent;
