import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type cartItem = {
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: cartItem[];
};

let initialState: CartState = {
  items: [],
};


export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ name: string; image: string; price: number,  }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else state.items.push({ ...action.payload, quantity: 1 });
  
    },
    removeFromCart(state, action: PayloadAction<{ name: string }>) {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },

    deleteItemFromCart(state, action: PayloadAction<{ name: string }>) {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      state.items.splice(itemIndex, 1);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, deleteItemFromCart, clearCart } =
  cartSlice.actions;
