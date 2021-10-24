import { createSlice } from "@reduxjs/toolkit"

export const cart = createSlice({
  name: "carrinho",
  initialState: {
    items: []
  },
  reducers: {
    add(state, action) {
      state.items.push(action.payload)
    },
    remove(state, action) {
      state.items.splice(action.payload, 1)
    },
    reset(state, action) {
      state.items = []
    }
  }
})

export const actions = cart.actions;
export default cart.reducer