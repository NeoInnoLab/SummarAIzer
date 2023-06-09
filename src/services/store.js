import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article';

// store is a global state that safe entire information of the app
// but most of the time, we only need to use a part of the state
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer, // in this case, we just want to get somthing from articleApi
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

// Redux Toolkit: https://redux-toolkit.js.org/api/configureStore#basic-example
