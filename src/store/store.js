import {
  configureStore,
} from '@reduxjs/toolkit';

import reducer from './index';



/** Redux global store */
const Store = configureStore({
  reducer,
});

export default Store;
