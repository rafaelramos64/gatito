import { createSlice } from "@reduxjs/toolkit"

export const counter = createSlice({
  name: "contador",
  initialState: {
    value: 0
  },
  reducers: {
    increase(state, action) {
      state.value++
    },
  }
})

export const actions = counter.actions;
export default counter.reducer