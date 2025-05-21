// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./slices/wishListSlice";
import justForYouReducer from "./slices/justForYouSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    wishList: wishListReducer, // Here i'm adding wishList slice to the store
    justForYou: justForYouReducer, // also here , adding justForYou slice to the store
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // now defining RootState type for use in selectors
export type AppDispatch = typeof store.dispatch; // here i'm defining AppDispatch type for dispatching actions
