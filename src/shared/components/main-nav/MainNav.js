import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => (
  <nav>
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/foo"><li>Foo</li></Link>
      <Link to="/bar"><li>Bar</li></Link>
    </ul>
  </nav>
);

export default MainNav;
