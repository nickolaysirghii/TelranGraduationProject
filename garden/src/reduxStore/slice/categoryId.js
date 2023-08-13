import { createSlice } from "@reduxjs/toolkit";

const initialState = {
category_id: "1"
}

export const categoryId = createSlice({
    name: "categoryId",
    initialState,
    reducers:{
        changeCatName: (state , action)=>{
           
                state.category_id = action.payload

        }
    }
});

export const { changeCategoryId } = categoryId.actions;
export default categoryId.reducer;