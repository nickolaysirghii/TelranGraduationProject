import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    sorted44: [],
   
}

export const sortSlice = createSlice({
    name: "sortSlice",
    initialState,
    reducers:{
     sortUp:(state , action)=>{
        console.log(action.payload)
        const prices = [];
        action.payload.forEach((elem)=>{
         
           prices.push(elem.price)
        })
        prices.sort((a, b) => a - b)
        const dataUp = [];

      for(let i = 0 ; i < prices.length ; i++){
        const elem1 = prices[i]
        for(let a = 0 ; a < action.payload.length ; a++){
         const elem2 = action.payload[a]
         if(elem1 === elem2.price){
            dataUp.push(elem2)
            break
         }
        }
      }

        state.sorted44 = dataUp

     },
     sortDown:(state , action )=>{
        const prices = [];
        action.payload.forEach((elem)=>{
         
           prices.push(elem.price)
        })
        prices.sort((a, b) => b - a)
        const dataUp = [];

      for(let i = 0 ; i < prices.length ; i++){
        const elem1 = prices[i]
        for(let a = 0 ; a < action.payload.length ; a++){
         const elem2 = action.payload[a]
         if(elem1 === elem2.price){
            dataUp.push(elem2)
            break
         }
        }
      }

        state.sorted44 = dataUp
     },
     sortDefault:(state , action )=>{
        state.sorted44 = action.payload
     }
     
    }
});

export const { sortUp , sortDown ,sortDefault } = sortSlice.actions;
export default sortSlice.reducer;