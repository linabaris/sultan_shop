import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice';
import sortReducer from './slices/sortSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        sort: sortReducer,

    }
})