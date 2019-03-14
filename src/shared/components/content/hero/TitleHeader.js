import React from 'react';
import './../assets/css/title-header.css';

const TitleHeader = (props) => (
  <div className="title-header-copy">
    <h3>{props.title}</h3>
    <ul>
      <li><button className="active">active</button></li>
      <li><button>inactive</button></li>
    </ul>
  </div>
);

export default TitleHeader;
