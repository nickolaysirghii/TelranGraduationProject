import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eachProd: {
            id: 1,
            title: "Savannah Summer Annual Collection",
            price: 53,
            discont_price: 50,
            description: "We love this fusion of colorful blossoms, created by combining some of the most floriferous and high performance annuals we know in our Savannah Summer Collection. Cherry-red Zinnia and sunrise-hued Lantana provide a perpetual fountain of flowers amidst the dark purple spiky foliage of Tradescantia.",
            image: "/product_img/1.jpeg",
            createdAt: "2022-10-02T14:43:29.000Z",
            updatedAt: "2022-10-02T14:43:29.000Z",
            categoryId: 1
        }
}

export const everyProductObject = createSlice({
    name: "eachProduct",
    initialState,
    reducers:{
        changeObject: (state , action)=>{
            state.eachProd = action.payload
        }
    }
});

export const { changeObject } = everyProductObject.actions;
export default everyProductObject.reducer;