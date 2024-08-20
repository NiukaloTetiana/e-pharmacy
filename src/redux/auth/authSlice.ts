import { createSlice } from "@reduxjs/toolkit";

interface IAuthSlice {
  user: { name: string | null; email: string | null };
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
}

const initialState: IAuthSlice = {
  user: { name: null, email: null },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({ name: "auth", initialState, reducers: {} });

export const authReducer = authSlice.reducer;
export type AuthState = ReturnType<typeof authReducer>;
