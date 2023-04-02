import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage:1,
    productPerPage:12,
    amountPage:3
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        nextPage: (state) => {
            if(state.currentPage !== state.amountPage) {
                state.currentPage = state.currentPage + 1;
            }
        },
        prevPage: (state) => {
            if(state.currentPage !== 1) {
                state.currentPage = state.currentPage - 1;
            }
        },
        setPageAmount: (state, action) => {
            state.amountPage = action.payload;
        },
        changePage: (state, action) => {
            state.currentPage = action.payload;
        }

    }
})

export const { nextPage, prevPage, changePage, setPageAmount } = paginationSlice.actions;

export default paginationSlice.reducer;