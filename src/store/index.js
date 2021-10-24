import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import cart from "./cart";

export const store = configureStore({
  reducer: {
    counter,
    cart
  }
});