import { createAsyncThunk } from "@reduxjs/toolkit";

import type { IReview } from "../../types";
import { instance } from "../../services";

export const getReviews = createAsyncThunk<
  IReview[],
  undefined,
  { rejectValue: string }
>("reviews/getReviews", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/customer-reviews");

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
