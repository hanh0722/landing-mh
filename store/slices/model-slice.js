import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openOverlay: false
}

const ModelSlice = createSlice({
    name: 'model-slice',
    initialState: initialState,
    reducers: {
        openModelHandler(state, action){
            state.openOverlay = true;
        },
        closeModelHandler(state){
            state.openOverlay = false;
        }
    }
})

export const modelActions = ModelSlice.actions;

export default ModelSlice;