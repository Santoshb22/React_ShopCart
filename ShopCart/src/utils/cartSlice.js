import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
      addToCart: (state, action) => {
          state.push(action.payload)
      },
      removeCart: (state, action) => {
        const index = state.indexOf(action.payload);
        if (index > -1) {
          state.splice(index, 1);
        }
        return state;
      },
      removeAllfromCart: (state, action) => {
        return state.filter(item => item !== action.payload)
      }
  }
})

export const {addToCart, removeCart, removeAllfromCart} = cartSlice.actions
export default cartSlice.reducer