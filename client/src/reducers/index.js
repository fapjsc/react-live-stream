import { combineReducers } from 'redux';

// 從redux-form導入reducer, 並重新並名為formReducer
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
