import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setMainNavThemeColor, setEndOfPageScroll } from '../actions/shared-ui-actions';

const NavHooks = (props) => {
  const [name, setName] = useState('here');

  const setStyle = (linkName) => linkName === name ? { fontWeight: 'bold' } : null;

  console.log('props in navHooks: ', props);

  return (
    <ul>
      <li style={setStyle('here')} onClick={ () => setName('here') }>here</li>
      <li style={setStyle('there')} onClick={ () => setName('there') }>there</li>
    </ul>
  );
}

// export default NavHooks;

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, { setMainNavThemeColor, setEndOfPageScroll })(NavHooks);
