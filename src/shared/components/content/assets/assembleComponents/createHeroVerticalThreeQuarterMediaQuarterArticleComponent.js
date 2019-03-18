import React from 'react';
import loadable from '@loadable/component';

const TextArticle = loadable( () => import('./../../hero/TextArticle') );
const VideoComponent = loadable( () => import('./../../hero/VideoComponent') );

import './../css/hero-vertical-three-quarter-media-quarter-article.css';

const createHeroVerticalThreeQuarterMediaQuarterArticleComponent = (props) => {
  const { cssClass, textArticle, video, stats  } = props;

  return (
    <article className="hero-vertical-three-quarter-media-quarter-article">
      <VideoComponent video={video} stats={stats} />
      <TextArticle copy={textArticle} colorTheme={cssClass}  />
    </article>
  );
}

export default createHeroVerticalThreeQuarterMediaQuarterArticleComponent;
