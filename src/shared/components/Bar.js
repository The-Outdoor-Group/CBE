import React from 'react';
import { Helmet } from 'react-helmet';
import './h1.css';

const Bar = () => (
  <div>
    <Helmet>
      <title>Bar Component</title>
    </Helmet>
    <h1>I am the Bar component</h1>
  </div>
);

export default Bar;
