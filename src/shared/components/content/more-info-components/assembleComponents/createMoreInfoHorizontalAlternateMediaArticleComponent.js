import React from 'react';
import loadable from '@loadable/component';

import './assets/css/alternate-text-media.css';

const Image = loadable( () => import('./../media-assets/Image') );
const Header = loadable( () => import('./../text/Header') );

const createMoreInfoHorizontalAlternateMediaText = (props) => {
  const { headerArticles } = props;

  const alternateTextMediaNodes = () => {
    return headerArticles.map( (header, i) => {

      let article = [{h3: header.h3, p: header.p}];
      let { image } = header;

      return (
        (i % 2)
          ? (
              <div className="alt-media-text-wrapper">
                <Header articles={article}/>
                <Image data={image} />
              </div>
            )
          : (
              <div className="alt-media-text-wrapper">
                <Image data={image} />
                <Header articles={article}/>
              </div>
            )
      )
    });
  };

  return (
    <article className="alternate-text-media-wrapper">
      { alternateTextMediaNodes() }
    </article>
  );
}

export default createMoreInfoHorizontalAlternateMediaText;
