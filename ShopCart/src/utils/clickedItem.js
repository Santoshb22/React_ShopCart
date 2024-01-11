import { createSlice } from "@reduxjs/toolkit";

const clickedItemSlice = createSlice({
    name:"clickedItem",
    initialState: {
        showClickedItem: null
    },
    reducers: {
        getClickedItem: (state, action) => {
            state.showClickedItem = action.payload
        }
    }
})

export const {getClickedItem} = clickedItemSlice.actions
export default clickedItemSlice.reducer