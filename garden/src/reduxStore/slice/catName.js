import { createSlice } from "@reduxjs/toolkit";

const initialState = {
catName: "Anuals"
}

export const categoryName = createSlice({
    name: "catName",
    initialState,
    reducers:{
        changeCatName: (state , action)=>{
            state.catName = action.payload
        }
    }
});

export const { changeCatName } = categoryName.actions;
export default categoryName.reducer;