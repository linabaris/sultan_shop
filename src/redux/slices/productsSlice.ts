import data from '../../products.json';
import { createSlice } from "@reduxjs/toolkit";

const products = data;
const initialState = {
    items: products,
}
export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    }
})

export const { setItems } = ProductsSlice.actions;

export default ProductsSlice.reducer;