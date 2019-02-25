import React from 'react';
import loadable from '@loadable/component';

const OtherComponent = loadable( () => import('./OtherComponent') );

const Counter = ({ increment, decrement, counter }) => (
  <div>
    <OtherComponent />
    <div>
      Clicked: {counter} times
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      </div>
  </div>
);

export default Counter;
