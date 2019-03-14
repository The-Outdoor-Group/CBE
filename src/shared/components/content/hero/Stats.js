import React from 'react';
import './../assets/css/stats.css';

const statNodes = (stats) => {
  return stats.map( (stat, i) => <li key={i}><img src="https://via.placeholder.com/180x50" />{stat}</li>);
};

// Will need a horizontal or vert prop to determine
// if across bottom or on the right side
const Stats = (props) => (
  <div className="stats">
    <ul>
      { statNodes(props.stats) }
      <li><button>order now</button></li>
    </ul>
  </div>
);

export default Stats;
