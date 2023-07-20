import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}
export const addToCart = createSlice({
    name:"cart",
    initialState,
    reducers:{
        productCart: (state,action)=>{
            state.cart.push(action.payload)
        }

    }
})
export const  { productCart } = addToCart.actions;
export default addToCart.reducer;