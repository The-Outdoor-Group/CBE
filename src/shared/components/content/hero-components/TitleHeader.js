import React from 'react';
import './../assets/css/title-header.css';

const TitleHeader = (props) => (
  <div className="title-header-copy">
    <h3>{props.title}</h3>
    { props.title === "Order Engage Hybrid"
      ? (<ul>
          <li><button className="active">Order Now</button></li>
        </ul>)
      :
        null }
  </div>
);

export default TitleHeader;

// <li><button className="active">active</button></li>
// <li><button>inactive</button></li>
