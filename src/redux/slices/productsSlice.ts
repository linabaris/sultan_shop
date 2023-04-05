import data from '../../products.json';
import { createSlice } from "@reduxjs/toolkit";

let localStorData = localStorage.getItem('products');

let products = [];
if(localStorData) {
    products = [...data, ...JSON.parse(localStorData)]
} else {
    products = data;
}

const lastId = products.sort((a,b) => b.id - a.id)[0].id

const initialState = {
    items: products,
    lastIndex:lastId,

}
export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
        setLastIndex(state, action) {
            state.lastIndex = action.payload
        }
    }
})

export const { setItems, setLastIndex } = ProductsSlice.actions;

export default ProductsSlice.reducer;