import React from 'react';
import { Link } from 'react-router-dom';

import './../assets/css/breadcrumbs.css';

const Breadcrumbs = props => {
  return (
    <div className="align-self-center" id="breadcrumbs">
      <Link to="/">Store</Link> &#47; <Link to="/">Sights</Link> &#47; <Link to="/">Engage Hybrid</Link>
    </div>
  );
};

export default Breadcrumbs;
