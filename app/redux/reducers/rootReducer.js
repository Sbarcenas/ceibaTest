import {combineReducers} from 'redux';
import userReducer from './userReducer';
import ErrorReducer from './ErrorReducer';
import authReducer from './authReducer';
import configReducer from './configReducer';

const rootReducer = combineReducers({
  user: userReducer,
  error: ErrorReducer,
  auth: authReducer,
  config: configReducer,
});
export default rootReducer;
