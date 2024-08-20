import { createAsyncThunk } from "@reduxjs/toolkit";

import type { IStore } from "../../types";
import { instance } from "../../services";

export const getAllStores = createAsyncThunk<
  IStore[],
  undefined,
  { rejectValue: string }
>("stores/getAllStores", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/stores");

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});

export const getNearStores = createAsyncThunk<
  IStore[],
  undefined,
  { rejectValue: string }
>("stores/getNearStores", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/stores/nearest");

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
