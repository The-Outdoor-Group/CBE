import React from 'react';
import { Helmet } from 'react-helmet';
import './h1.css';

const Foo = () => (
  <div>
    <Helmet>
      <title>Foo Component</title>
    </Helmet>
    <h1>I am the Foo component</h1>
  </div>
);

export default Foo;
