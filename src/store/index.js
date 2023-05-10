import { combineReducers } from '@reduxjs/toolkit';

import userReducers from './user/userReducer';

const RootReducer = combineReducers({
  userReducers,
});

export default RootReducer;
