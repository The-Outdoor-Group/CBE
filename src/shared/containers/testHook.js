import React, { useState } from 'react';

const TestHook = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p onClick={() => setCount(count + 1)}>You clicked {count} times</p>
    </div>
  );
}
export default TestHook;
