import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    from: 0,
    to: 10000,
    check1: false,
    check2: null,
    sorted: []

};

export const inputSlice = createSlice({
    name: "inputValues",
    initialState,
    reducers: {
      fromData:(state , action )=>{
        state.from = action.payload
      },
      toData:(state , action )=>{
        if(action.payload === ""){
            state.to = 10000
        }else{
        state.to = action.payload
        } 
      },
      checkData:(state)=>{
        state.check1 = !state.check1
        if(state.check1){
            state.check2 = 1;
        }else{
            state.check2 = null;
        }

      },
      sortedData:(state,action)=>{
        const {status,data1}= action.payload;
        
        if(status == "1" ){
          let sortedPrices = [];
          let sortedPriceDistinct = [];
          let filtredData = [];
         
         data1.forEach((elem)=>{
          sortedPrices.push(elem.price)
         });
         sortedPrices.sort((a,b)=>a-b);
         let prev = 0
         sortedPrices.forEach((elem)=>{
         if(prev === 0){
          prev = elem
          sortedPriceDistinct.push(elem);
         }else{
          if(elem != prev){
            sortedPriceDistinct.push(elem);
            prev = elem
          }
         }
      });

         for(let i = 0 ; i < sortedPriceDistinct.length ; i++){
          for(let a = 0 ; a < data1.length ; a++){
            if(data1[a].price === sortedPriceDistinct[i]){
              filtredData.push(data1[a]);
            
            }
          }
         }
           state.sorted = filtredData
         }else{
          if(status == "2" ){
            let sortedPrices = [];
            let sortedPriceDistinct = [];
            let filtredData = [];
           
           data1.forEach((elem)=>{
            sortedPrices.push(elem.price)
           });
           sortedPrices.sort((a,b)=>b-a);
           let prev = 0
           sortedPrices.forEach((elem)=>{
           if(prev === 0){
            prev = elem
            sortedPriceDistinct.push(elem);
           }else{
            if(elem != prev){
              sortedPriceDistinct.push(elem);
              prev = elem
            }
           }
        });
  
           for(let i = 0 ; i < sortedPriceDistinct.length ; i++){
            for(let a = 0 ; a < data1.length ; a++){
              if(data1[a].price === sortedPriceDistinct[i]){
                filtredData.push(data1[a]);
              
              }
            }
           }
             state.sorted = filtredData
           }else{
            state.sorted = data1
           }
         }
        }



      }
    },

);
export const {fromData , toData , checkData , sortedData} = inputSlice.actions
export default inputSlice.reducer;