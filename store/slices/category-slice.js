import { createSlice } from "@reduxjs/toolkit";
import { categorySliceState } from "../states";

const categorySlice = createSlice({
    name: 'category-slice',
    initialState: categorySliceState,
    reducers: {
        changeCategoryHandler(state, action){
            state.category = action.payload;
        }
        
    }
})

export const categoryActions = categorySlice.actions;
export default categorySlice;