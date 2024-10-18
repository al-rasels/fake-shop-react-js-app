import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
