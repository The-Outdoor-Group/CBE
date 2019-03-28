import React from 'react';
import loadable from '@loadable/component';
import './../css/hero-horizontal-three-quarter-media-quarter-article.css';

const Stats = loadable( () => import('./../../hero/Stats') );
const TextArticle = loadable( () => import('./../../hero/TextArticle') );
const Image = loadable( () => import('./../../hero/Image') );

const createHeroHorizontalThreeQuarterMediaQuarterArticleComponent = (props, showMoreInfo) => {
  const { cssClass, stats, textArticle, moreInfoHandle } = props;

  return (
    <article className="hero-horizontal-three-quarter-media-quarter-article">
      <div className="full-image-height">
        <Image data={ {src: "https://via.placeholder.com/1380x600", alt: "placeholder", cssClass: "horizontal"} } />
        <Stats stats={stats} />
      </div>

      <TextArticle showMoreInfo={showMoreInfo} copy={textArticle} colorTheme={cssClass} moreInfoHandle={moreInfoHandle} />

    </article>
  );
};

export default createHeroHorizontalThreeQuarterMediaQuarterArticleComponent;
