import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { authApi } from './auth/authApi';
import { projectsApi } from './projectSlice/projectSlice';
import {priceApi} from "./price/priceApi";
import {estimateApi} from "./estimate/estimateApi" ;
import {positionApi} from "./position/positionApi"

import authReducer from './auth/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    [authApi.reducerPath]: authApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    [priceApi.reducerPath]: priceApi.reducer,
    [estimateApi.reducerPath]: estimateApi.reducer,
    [positionApi.reducerPath]: positionApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, projectsApi.middleware, priceApi.middleware, estimateApi.middleware, positionApi.middleware),
});

export const persistor = persistStore(store);