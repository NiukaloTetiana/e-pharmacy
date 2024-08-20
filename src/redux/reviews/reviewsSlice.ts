import { createSlice } from "@reduxjs/toolkit";
import { IReview } from "../../types";
import { getReviews } from "./reviewsOperations";

export interface IReviewsSlice {
  reviews: IReview[];
  isLoading: boolean;
}

const initialState: IReviewsSlice = {
  reviews: [],
  isLoading: false,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
      })
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
