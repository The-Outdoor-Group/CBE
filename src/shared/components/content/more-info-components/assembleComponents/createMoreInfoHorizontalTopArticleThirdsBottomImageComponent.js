import React from 'react';
import loadable from '@loadable/component';

const Image = loadable( () => import('../media-assets/Image') );

const createMoreInfoHorizontalTopArticleThirdsBottomImageComponent = (props) => {

  const { image } = props;
  console.log('image: ', image);

  return (
    <article>
      <h1>yo man</h1>
      <div> /* loop thru array of text entry objects */ </div>
       <Image data={image} /> // shouldn't be an image. Should go to index.js. indexjs will call proper video, image or 3d based on asset file name ext
    </article>
  );
}

export default createMoreInfoHorizontalTopArticleThirdsBottomImageComponent;
