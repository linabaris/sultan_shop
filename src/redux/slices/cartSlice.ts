import { TProduct } from './../../types/TProduct';

import { createSlice } from "@reduxjs/toolkit";

const goods : TProduct[] = [];
const initialState = {
    goods,
    totalPrice:0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addGood(state, action) {
            const findItem = state.goods.find((obj) => obj.id === action.payload.id);
            if(findItem) {
                if(findItem.count) {
                    findItem.count++
                }  
            } else {
                state.goods.push({
                    ...action.payload,
                    count:1
                })
            }
            // state.goods.push(action.payload);
            state.totalPrice = state.goods.reduce((sum:number, obj:TProduct) => {
                return obj.price + sum;
            }, 0)
        },
        removeGood(state, action) {
           state.goods = state.goods.filter((obj:TProduct) => obj.id !== action.payload)
        }
    }

})

export const { addGood, removeGood } = cartSlice.actions;

export default cartSlice.reducer;