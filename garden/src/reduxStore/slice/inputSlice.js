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



      }
    },

);
export const {fromData , toData , checkData } = inputSlice.actions
export default inputSlice.reducer;