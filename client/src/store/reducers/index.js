import { combineReducers } from 'redux';

import authReducer from './authReducer';
import plainReducer from './plainReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  plainReducer: plainReducer,
  postsReducer: postsReducer
})