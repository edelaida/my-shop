import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/slice";
import { cartSlice } from "./cart/cartSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
//import { PersistGate } from 'redux-persist/integration/react'
  
const persistConfig = {
    key: 'root-auth',
    version: 1,
    storage,
    whitelist: ['token'],
  }
  
export const store = configureStore({
    reducer: {
        cart: cartSlice,
        auth: persistReducer(persistConfig, authSlice),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export const persistor = persistStore(store);
