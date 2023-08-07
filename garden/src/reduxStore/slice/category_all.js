import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    category: [],
    status: null,
    error: null

};
export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async function (){
        const response = await fetch("http://localhost:3333/categories/all");
        const data = await response.json();
        return data;
    }
);
export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
   
    },
    extraReducers:{
        [fetchCategories.pending]: (state)=>{
            state.status = "loading";
            state.error = null;
        },
        [fetchCategories.fulfilled]: (state,action)=>{
            state.status = "resolved";
            state.category = action.payload;
        },
        [fetchCategories.rejected]: (state)=>{
            state.status = "rejected";
            state.category = []
        }
}
});
export default categorySlice.reducer;