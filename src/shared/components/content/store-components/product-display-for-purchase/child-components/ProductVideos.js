import React from 'react';
import './../assets/css/product-videos.css';

const ProductVideos = props => {
  return (
    <article id="product-video">
      <header>
        <h2>Product In Action</h2>
      </header>
      <video controls>
        <source src="https://slick-trick.s3.amazonaws.com/videos/2019/Viper_BPCabelas_FINAL_1.mp4" type="video/mp4" />
      </video>
      <p style={{marginTop: '1rem'}}>Video that shows various clips of specific product in action. Text to describe content for SEO.</p>
    </article>
  );
};

export default ProductVideos;
