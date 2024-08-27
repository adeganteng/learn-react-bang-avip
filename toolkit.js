import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginSession = createAction("LOGIN_SESSION");
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(loginSession, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("oncreate store", store.getState());

store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 19 }));
store.dispatch(addToCart({ id: 2, qty: 17 }));

store.dispatch(loginSession());
