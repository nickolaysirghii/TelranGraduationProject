import { createSlice } from "@reduxjs/toolkit";


const localCat = JSON.parse(localStorage.getItem("category"));
const initialState = {
catName: localCat ? localCat[1] : "Nursery",
catId: localCat ? localCat[0] : 1
}

export const categoryName = createSlice({
    name: "catName",
    initialState,
    reducers:{
        changeCatName: (state , action)=>{
            if(localStorage.getItem("category")){
                const cat11 = JSON.parse(localStorage.getItem("category"));
                state.catName = cat11[1]
                state.catId = cat11[0]
            }else{
                const cat_name = action.payload[1];
                const cat_id = action.payload[0];

                state.catName = cat_name
                state.catId = cat_id

                localStorage.setItem("category",JSON.stringify(action.payload))

            }
        }
    }
});

export const { changeCatName } = categoryName.actions;
export default categoryName.reducer;