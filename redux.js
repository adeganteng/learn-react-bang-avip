//! 1. Reducer

import { legacy_createStore } from "redux";

const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 1 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

//! 2. Store
const store = legacy_createStore(cartReducer);
console.log("oncreate store", store.getState());

//! 4. Subscribe
store.subscribe(() => {
  console.log("Store changed", store.getState());
});

//! 3. Dispatch
const action1 = {
  type: "ADD_TO_CART",
  payload: { id: 2, qty: 21 },
};
store.dispatch(action1);

const action2 = {
  type: "ADD_TO_CART",
  payload: { id: 3, qty: 15 },
};
store.dispatch(action2);
