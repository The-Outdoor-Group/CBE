import React from 'react';
import loadable from '@loadable/component';
import './../../css/hero-vertical-three-quarter-media-quarter-article.css';

const createHeroVerticalThreeQuarterMediaQuarterArticleComponent = (props, showMoreInfo) => {
  const { cssClass, textArticle, video, stats, moreInfoHandle  } = props;
  const TextArticle = loadable( () => import('./../../../hero-components/TextArticle') );
  const VideoComponent = loadable( () => import('./../../../hero-components/VideoComponent') );

  return (
    <article className="hero-vertical-three-quarter-media-quarter-article">
      <VideoComponent video={video} stats={stats} />
      <TextArticle showMoreInfo={showMoreInfo} copy={textArticle} colorTheme={cssClass}  moreInfoHandle={moreInfoHandle} />
    </article>
  );
}

export default createHeroVerticalThreeQuarterMediaQuarterArticleComponent;
