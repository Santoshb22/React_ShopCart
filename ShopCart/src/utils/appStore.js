import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./productSlice"
import clickedItemReducer from "./clickedItem"
const appStore = configureStore({
   reducer: {
    product: productReducer,
    clickedItem: clickedItemReducer
    }
})

export default appStore