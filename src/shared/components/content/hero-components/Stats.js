import React from 'react';
import './../assets/css/stats.css';

const statNodes = (stats) => {
  return stats.map( (stat, i) => <li key={i}><img src="https://via.placeholder.com/180x50" />{stat}</li>);
};

const Stats = (props) => {
  const { cssClass, copy, orderButton } = props.stats;

  return (
    <div className={`stats ${cssClass}`}>
      <ul className={cssClass}>
        { statNodes(copy) }
        {orderButton ? <li><button>order now</button></li> : null}
      </ul>
    </div>
  );
}

export default Stats;
