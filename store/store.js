import { configureStore } from '@reduxjs/toolkit';
import filmSlice from './filmSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, filmSlice);

export const store = configureStore({
	reducer: {
		film: persistedReducer,
	},
	middleware: [thunk],
});

export const persistor = persistStore(store);