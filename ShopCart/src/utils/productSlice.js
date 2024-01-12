import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productData: null,
    },
    reducers: {
        getProductData: (state, action) => {
            state.productData = action.payload
        }
    }
})
export const {getProductData} = productSlice.actions
export default productSlice.reducer