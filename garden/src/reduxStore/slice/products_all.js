import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";




const initialState = {
    products: [],
    status: null,
    error: null,
    post: []

};
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function (){
        if(localStorage.getItem("garden")){
            const data2 = localStorage.getItem("garden");
            const data3 = JSON.parse(data2);
            return data3
        }else{
        const response = await fetch("http://localhost:3333/products/all");
        const data = await response.json();
        return data;
    }
    }
);
export const postDiscount = createAsyncThunk(
    'products/postDiscount',
    async function (ddaata){
       fetch("https://fakestoreapi.com/products",
       {
        method: "POST",
        body: JSON.stringify(ddaata)
       })
       .then(res=>res.json())
       .then(json => {
        console.log(json)
        return json
        
       })
    }
)
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
            localStorage.setItem("garden",JSON.stringify(state.products))
        },
        delete_from_the_cart: (state, action)=>{
            
            let cartState = 0;
            state.products.forEach((elem)=>{
                if(elem.amount){
                    cartState += 1
                }
            });
            if(cartState === 1){
                delete state.products[action.payload].amount 
                localStorage.removeItem("garden")
            }else{
                delete state.products[action.payload].amount 
            }

        },
        decrease_card_amount: (state,action)=>{
            if(state.products[action.payload].amount >1){
                state.products[action.payload].amount -=1
            }
        },
        increase_cart_amount: (state,action)=>{
            state.products[action.payload].amount += 1
        },
        sortAllProducts: (state , action )=>{
            if(action.payload === "first"){
             state.products.sort((a,b)=>a.price - b.price)
            }else if(action.payload === "second"){
             state.products.sort((a,b)=>b.price - a.price)
            }else if(action.payload === "third"){
             state.products.sort((a,b)=>a.id - b.id)
            }
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
        },
        [postDiscount.fulfilled]: (state , action)=>{
            state.post = action.payload
           
        }
}
});
export const {sortAllProducts ,add_to_cart , delete_from_the_cart , decrease_card_amount , increase_cart_amount } = productsSlice.actions;
export default productsSlice.reducer;