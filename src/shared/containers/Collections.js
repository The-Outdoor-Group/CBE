import React, { useEffect } from 'react';


/*
  This component is used for main nav selection - will use props.match from url to get products for
  said collection. Will have an action to link up
*/

const Collections = props => {

  useEffect(() => {
    console.log('props.match in Collections: ', props.match);
  });

  return (
    <div>
      <h1>The Collections Page</h1>
    </div>
  );
};

export default Collections;
