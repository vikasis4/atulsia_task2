import { configureStore } from '@reduxjs/toolkit';
import  api from './api';

// This is a simple redux store, where we have configured our api middleware

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
