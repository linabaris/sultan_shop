import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filterParam: '',
    priceMin: 0,
    priceMax: 100000,
    searchParam:'',
    checkedParams: [''],

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
        setCheckedParams(state, action)  {
            state.checkedParams = [...state.checkedParams, action.payload]
        },
        removeCheckedParams(state, action) {
            state.checkedParams = state.checkedParams.filter(item => {
                return item !== action.payload;
            })
        },
        resetFilter: () => initialState,
    }
})

export const { setFilterParam, setPriceMin, setPriceMax, setSearchParam, setCheckedParams, removeCheckedParams, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;