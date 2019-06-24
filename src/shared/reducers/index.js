import { combineReducers } from 'redux';
import sharedUiReducer from './shared-ui-reducer';

export default combineReducers({
  sharedUiState: sharedUiReducer
});
