import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sharedUiReducer from './shared-ui-reducer';

export default combineReducers({
  users: usersReducer,
  sharedUiState: sharedUiReducer,
});
