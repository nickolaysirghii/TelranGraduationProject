import { configureStore } from "@reduxjs/toolkit";
import cartData from "./slice/cartProducts";
import products from "./slice/products_all";
import everyProduct from "./slice/eachProduct";

export const store = configureStore({
    reducer: {
      cart: cartData,
      productsAll: products,
      eachPro: everyProduct
      
    }
});