// wishListSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { wishListData } from "../../types/product";

interface WishListState {
  items: wishListData[];
}

const initialState: WishListState = {
  items: JSON.parse(localStorage.getItem("wishlist") || "[]"), // Load from localStorage
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<wishListData>) => {
      state.items.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.items)); // saving to localStorage
    },
    removeFromWishList: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.items)); // saving to localStorage
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export const selectWishList = (state: { wishList: WishListState }) =>
  state.wishList.items;
export default wishListSlice.reducer;
