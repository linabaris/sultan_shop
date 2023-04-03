import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterParam: '',
    priceMin: 0,
    priceMax: 10000,
    searchParam:'',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterParam(state, action) {
            state.filterParam = action.payload;
        },
        setPriceMin(state, action) {
            state.priceMin = action.payload;
        },
        setPriceMax(state, action) {
            state.priceMax = action.payload;
        },
        setSearchParam(state, action) {
            state.searchParam = action.payload;
        },
    }
})

export const { setFilterParam, setPriceMin, setPriceMax, setSearchParam } = filterSlice.actions;

export default filterSlice.reducer;