import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type { ICart, ICartProduct, INewOrder, IOrder } from "../../types";
import { instance } from "../../services";

export const getCart = createAsyncThunk<
  ICart,
  undefined,
  { rejectValue: string }
>("cart/getCart", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/cart");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const updateCart = createAsyncThunk<
  ICart,
  ICartProduct[],
  { rejectValue: string }
>("cart/updateCart", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.put("/cart/update");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const addOrder = createAsyncThunk<
  IOrder,
  INewOrder,
  { rejectValue: string }
>("cart/addOrder", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.post("/cart/checkout");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
