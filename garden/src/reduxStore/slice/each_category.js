import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    category: [],

};
export const fetchEachCategories = createAsyncThunk(
    'EachCategory/fetchEachCategories',
    async function (id){
        const response = await fetch(`http://localhost:3333/categories/${id}`);
        const data = await response.json();
        return data;
    }
);
export const EachcategorySlice = createSlice({
    name: "EachCategory",
    initialState,
    extraReducers:{
        [fetchEachCategories.pending]: (state)=>{
        state.category = []
         },
        [fetchEachCategories.fulfilled]: (state,action)=>{
            state.category = action.payload;
        },
        [fetchEachCategories.rejected]: (state)=>{
            state.category = []
    
        }
}
});
export default EachcategorySlice.reducer;