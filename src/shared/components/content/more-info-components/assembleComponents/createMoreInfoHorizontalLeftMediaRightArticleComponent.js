import React from 'react';
import loadable from '@loadable/component';
import './assets/css/horizontal-left-media-right-article.css';

const Image = loadable( () => import('../../hero-components/Image') );
const Header = loadable( () => import('../text/Header') );

export const createMoreInfoHorizontalLeftMediaRightArticleComponent = (props) => {
  const { video, headerArticles } = props;

  const headerNodes = (articles) => (
    <div className="header-wrapper">
      <Header articles={articles} />
    </div>
  );

  return (
    <article className="horizontal-half-media-half-text-article">
      <Image data={video} /> {/* shouldn't be an image. Should go to index.js. indexjs will call proper video, image or 3d based on asset file name ext */}
      { headerNodes(headerArticles) }
    </article>
  );
}

export default createMoreInfoHorizontalLeftMediaRightArticleComponent;
