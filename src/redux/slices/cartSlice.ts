import { TProduct } from './../../types/TProduct';

import { createSlice } from "@reduxjs/toolkit";

const goods : TProduct[] = [];
const initialState = {
    goods,
    totalPrice:0,
    totalCount:0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addGood(state, action) {
            const findItem = state.goods.find((obj) => obj.id === action.payload.id);
            if(findItem?.count) {
                findItem.count++;
                state.totalCount = state.goods.length*findItem.count  
            } else {
                state.goods.push({
                    ...action.payload,
                    count:1
                })
            }
            state.totalCount = state.goods.reduce((sum:number, obj:TProduct) => {
                if(obj.count) {
                    return obj.count + sum;
                }
                return 1+sum;
            }, 0)
            // state.goods.push(action.payload);
            state.totalPrice = state.goods.reduce((sum:number, obj:TProduct) => {
                if(obj.count) {
                    return obj.price*obj.count + sum;
                }
                return obj.price + sum;
            }, 0)
            
        },
        removeGood(state, action) {
           state.goods = state.goods.filter((obj:TProduct) => obj.id !== action.payload);
        },
        reduceGoods(state,action) {
            const findItem = state.goods.find((obj) => obj.id === action.payload.id);
            if(findItem) {
                if(findItem.count) {
                    findItem.count--;
                }
            }
            state.totalCount = state.goods.reduce((sum:number, obj:TProduct) => {
                if(obj.count) {
                    return obj.count + sum;
                }
                return sum;
            }, 0)
            state.totalPrice = state.goods.reduce((sum:number, obj:TProduct) => {
                if(obj.count) {
                    return obj.price*obj.count + sum;
                }
                return obj.price + sum;
            },0)
        },
        resetCart: () => initialState,
    }

})

export const { addGood, removeGood, reduceGoods, resetCart } = cartSlice.actions;

export default cartSlice.reducer;