import { createSlice } from "@reduxjs/toolkit";
import { productsAll } from "../../data/productsAll";

const initialState = {
    data1: productsAll
};
 
export const dataSlice = createSlice({
    name: "Data",
    initialState,
    reducers: {
      
    }
});


export default dataSlice.reducer;