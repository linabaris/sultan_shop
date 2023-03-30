import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice';
import sortReducer from './slices/sortSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        sort: sortReducer,
        filter: filterReducer,
    }
})