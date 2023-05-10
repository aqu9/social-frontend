import { combineReducers } from '@reduxjs/toolkit';

import userReducers from './user/userReducer';
import postReducers from './posts/postReducers';

const RootReducer = combineReducers({
  userReducers,
  postReducers
});

export default RootReducer;
