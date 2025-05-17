// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import wishListReducer from './slices/wishListSlice'; // Import wishListSlice
import justForYouReducer from './slices/justForYouSlice'; 
import cartReducer from './slices/cartSlice'; 

export const store = configureStore({
  reducer: {
    wishList: wishListReducer, // Adding wishList slice to the store
    justForYou: justForYouReducer, // Adding justForYou slice to the store
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Defining RootState type for use in selectors
export type AppDispatch = typeof store.dispatch; // Defining AppDispatch type for dispatching actions
