import { configureStore } from "@reduxjs/toolkit";
import data from "./slice/dataSlice"

export const store = configureStore({
    reducer: {
      number: data
    }
});