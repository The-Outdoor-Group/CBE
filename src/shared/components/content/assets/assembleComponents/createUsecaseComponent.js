import React from 'react';
import loadable from '@loadable/component';

const TextArticle = loadable( () => import('./../../hero/TextArticle') );
const VideoComponent = loadable( () => import('./../../hero/VideoComponent') );

import './../css/usecase-article.css';

const createUsecaseComponent = (props) => {
  const { textArticle, video, stats  } = props;

  return (
    <article id="usecase-article">
      <VideoComponent video={video} stats={stats} />
      <TextArticle props={textArticle} />
    </article>
  );
}

export default createUsecaseComponent;
