import { createAsyncThunk } from "@reduxjs/toolkit";

import type { IProduct } from "../../types";
import { instance } from "../../services";

export const getProducts = createAsyncThunk<
  IProduct[],
  { page: number; limit: number; name: string; category: string },
  { rejectValue: string }
>(
  "products/getProducts",
  async ({ page, limit, name, category }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/products", {
        params: { page, limit, name, category },
      });

      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getOneProduct = createAsyncThunk<
  IProduct,
  string,
  { rejectValue: string }
>("products/getOneProduct", async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(`/products/${id}`);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
