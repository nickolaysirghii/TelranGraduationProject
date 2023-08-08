import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";




const initialState = {
    products: [],
    status: null,
    error: null

};
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function (){
        const response = await fetch("http://localhost:3333/products/all");
        const data = await response.json();
        localStorage.setItem("allProducts",JSON.stringify(data));
        return data;
    }
);
export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        add_to_cart: (state,action)=>{
            if(state.products[action.payload].amount > 0){
                state.products[action.payload].amount +=1
            }else{
                state.products[action.payload].amount = 1
            }
        },
        delete_from_the_cart: (state, action)=>{
            delete state.products[action.payload].amount 
        },
        decrease_card_amount: (state,action)=>{
            if(state.products[action.payload].amount >1){
                state.products[action.payload].amount -=1
            }
        },
        increase_cart_amount: (state,action)=>{
            state.products[action.payload].amount += 1
        }
    },
    extraReducers:{
        [fetchProducts.pending]: (state)=>{
            state.status = "loading";
            state.error = null;
        },
        [fetchProducts.fulfilled]: (state,action)=>{
            state.status = "resolved";
            state.products = action.payload;
        },
        [fetchProducts.rejected]: (state)=>{
            state.status = "rejected";
            state.data = []
        }
}
});
export const {add_to_cart , delete_from_the_cart , decrease_card_amount , increase_cart_amount } = productsSlice.actions;
export default productsSlice.reducer;