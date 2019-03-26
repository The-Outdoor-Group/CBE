import React from 'react';
import loadable from '@loadable/component';

import './assets/css/horizontal-top-article-thirds-bottom-media.css';

const Image = loadable( () => import('../media-assets/Image') );
const Header = loadable( () => import('../text/Header') );

export const createMoreInfoHorizontalTopArticleBottomMediaFooterArticleComponent = (props) => {
  const { image, headerArticles, footerArticles } = props;

  const headerNodes = (articles) => (
    <div className="header-wrapper">
      <Header articles={articles} />
    </div>
  );

  return (
    <article className="horizontal-top-article-thirds-bottom-media">
      { headerNodes(headerArticles) }
      <Image data={image} /> {/* shouldn't be an image. Should go to index.js. indexjs will call proper video, image or 3d based on asset file name ext */}
      { footerArticles ? headerNodes(footerArticles) : null }
    </article>
  );
}

export default createMoreInfoHorizontalTopArticleBottomMediaFooterArticleComponent;
