import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice';
import sortReducer from './slices/sortSlice';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import paginationReducer from "./slices/paginationSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        sort: sortReducer,
        filter: filterReducer,
        cart: cartReducer,
        pagination: paginationReducer,
    }
})