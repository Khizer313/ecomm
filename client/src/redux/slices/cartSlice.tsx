import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
}

// Load and Save functions
const loadCartFromLocalStorage = (): CartItem[] => {
  try {
    const serializedCart = localStorage.getItem('cartItems');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (e) {
    console.error("Could not load cart from localStorage", e);
    return [];
  }
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart to localStorage", e);
  }
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.items);
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        saveCartToLocalStorage(state.items);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
