import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authslice';
import  {apiSlice}  from './Slices/apiSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;