import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// Combine reducers
const rootReducer = combineReducers({ user: userReducer });

// Persist config
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// Apply persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer, // Corrected here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create persistor
export const persistor = persistStore(store);
