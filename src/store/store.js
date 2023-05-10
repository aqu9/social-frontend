import {
  configureStore,
  getDefaultMiddleware,
  MiddlewareArray,
} from '@reduxjs/toolkit';

import reducer from './index';

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const CustomMiddleware = new MiddlewareArray().concat(defaultMiddleware);

const isDevEnvAndBrowser =
  process.env.NODE_ENV === 'development' && typeof window !== 'undefined';

/** Show redux logs only in dev env */
if (isDevEnvAndBrowser) {
  // const reduxLogger = require('redux-logger');
  // const logger = reduxLogger.createLogger();
  // CustomMiddleware.concat(logger);
}

/** Redux global store */
const Store = configureStore({
  middleware: CustomMiddleware,
  reducer,
});

export default Store;
