import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { storesReducer } from "./stores/storesSlice";
import { authReducer, AuthState } from "./auth/authSlice";
import { reviewsReducer } from "./reviews/reviewsSlice";

// import { storesReducer, authReducer, AuthState } from "../redux";

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["refreshToken"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer<AuthState>(persistConfig, authReducer),
    stores: storesReducer,
    reviews: reviewsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
