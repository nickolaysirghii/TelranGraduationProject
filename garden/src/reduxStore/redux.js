import { configureStore } from "@reduxjs/toolkit";
import data from "./slice/dataSlice";
import cartData from "./slice/cartProducts";

export const store = configureStore({
    reducer: {
      number: data,
      cart: cartData
    }
});