import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    pathname: '/'
}
const pathNameSlice = createSlice({
    name: 'path-name',
    initialState: intialState,
    reducers: {
        changePathnameHandler(state, action){
            state.pathname = action.payload
        }
    }
})

export const pathNameActions = pathNameSlice.actions;

export default pathNameSlice;