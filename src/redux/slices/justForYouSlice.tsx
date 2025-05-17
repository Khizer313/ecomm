// src/redux/slices/justForYouSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { recommendedProducts } from '../../data/products'; // adjust path as needed
import type { recommendedData } from '../../types/product';
import type { RootState } from '../store'; 

interface JustForYouState {
  products: recommendedData[];
}

const initialState: JustForYouState = {
  products: recommendedProducts,
};

const justForYouSlice = createSlice({
  name: 'justForYou',
  initialState,
  reducers: {
    // if needed later: addToWishlist, removeFromWishlist, etc.
  },
});

export default justForYouSlice.reducer;
export const selectJustForYou = (state: RootState) => state.justForYou.products;
