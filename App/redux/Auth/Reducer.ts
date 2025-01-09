const initialState: any = {
  loading: false,
  error: null,
  data: null,
  loginState: false,
};

/**
 * @description Pure function to manipulate state without mutating immutably
 * @returns states
 */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    successLogin: state => {
      state.loginState = true;
    },
    successLogout: state => {
      state.loginState = false;
    },
  },
});

export const {successLogin, successLogout} = authSlice.actions;

export default authSlice.reducer;
