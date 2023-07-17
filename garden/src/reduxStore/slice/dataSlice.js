import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data1: 1
};
 
export const dataSlice = createSlice({
    name: "Data",
    initialState,
    reducers: {
        increase(state,action){
          state.data1 += 1
        },
        decreese(state,action){
          state.data1 -= 1
        }
    }
});

export const  { increase , decreese } = dataSlice.actions;
export default dataSlice.reducer;