import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    sortParam: {
        name: 'названию',
        sortProperty: 'name',
    },
    ascSort: true,
}
const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortParam(state, action) {
            state.sortParam = action.payload;
        },
        setAscSort (state, action) {
            state.ascSort = action.payload;
        }
    }
})

export const { setSortParam, setAscSort } = sortSlice.actions;

export default sortSlice.reducer;