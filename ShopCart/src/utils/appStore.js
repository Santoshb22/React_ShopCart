import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./productSlice"
import clickedItemReducer from "./clickedItem"
import cartReducer from "./cartSlice"
const appStore = configureStore({
   reducer: {
    product: productReducer,
    clickedItem: clickedItemReducer,
    cart: cartReducer
    }
})

export default appStore