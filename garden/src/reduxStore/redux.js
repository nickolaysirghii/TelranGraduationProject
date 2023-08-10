import { configureStore } from "@reduxjs/toolkit";
import cartData from "./slice/cartProducts";
import products from "./slice/products_all";
import everyProduct from "./slice/eachProduct";
import allCategories from "./slice/category_all";
import everyCategory from "./slice/each_category";
import CatName from "./slice/catName";
import inputSlice from "./slice/inputSlice";

export const store = configureStore({
    reducer: {
      cart: cartData,
      productsAll: products,
      eachPro: everyProduct,
      category: allCategories,
      eachCat: everyCategory,
      name1: CatName,
      inputs: inputSlice
      
      
    }
});