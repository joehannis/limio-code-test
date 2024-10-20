import { persistStore, persistReducer } from 'redux-persist';
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import basketReducer from './components/slice/basketSlice';

const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, basketReducer);

// Create the Redux store
export const store = createStore(persistedReducer);

// Create a persisted store
export const persistor = persistStore(store);

// Export the store and persistor for use in the app

// This file is the entry point for the Redux store. It creates a persisted store that stores the basket state in local storage.
