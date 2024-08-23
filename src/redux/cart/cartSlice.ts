import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import type { ICart, IOrder } from "../../types";
import { addOrder, getCart, updateCart } from "./cartOperations";
import { logoutUser } from "../auth/authOperations";

export interface ICartSlice {
  cart: ICart | null;
  order: IOrder | null;
  isLoading: boolean;
}

const initialState: ICartSlice = {
  cart: null,
  order: null,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.isLoading = false;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.isLoading = false;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.isLoading = false;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(getCart.pending, updateCart.pending, addOrder.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getCart.rejected, updateCart.rejected, addOrder.pending),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectCart: (state) => state.cart,
    selectOrder: (state) => state.order,
    selectIsLoadingCart: (state) => state.isLoading,
  },
});

export const cartReducer = cartSlice.reducer;
export const { selectCart, selectOrder, selectIsLoadingCart } =
  cartSlice.selectors;
