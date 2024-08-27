import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import loginReducer from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

store.subscribe(() => {
  return store.getState();
});

export default store;
