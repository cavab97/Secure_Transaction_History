import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_FAILED,
} from './Constants';
/**
 * Initial state for this slice of store
 */
// const initialState = {
//   loading: false,
//   error: null,
//   data: null,
// };
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
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//         error: null,
//       };

//     case LOGOUT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: null,
//         error: null,
//       };

//     case LOGIN_REQUEST:
//     case LOGOUT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case LOGIN_FAILED:
//     case LOGOUT_FAILED:
//       return {
//         ...state,
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    successLogin: (state, action: PayloadAction<boolean>) => {
      state.loginState = true;
    },
  },
});

export const {increment, decrement, incrementByAmount, successLogin} =
  authSlice.actions;

export default authSlice.reducer;
