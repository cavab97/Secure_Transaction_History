import {
  TRANSACTION_REQUEST,
  TRANSACTION_FAILED,
  TRANSACTION_SUCCESS,
} from './Constants';

const initialState: any = {
  loading: false,
  error: null,
  data: [],
};

/**
 * @description Pure function to manipulate state without mutating immutably
 * @returns states
 */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {TransactionData} from '../../model/TransactionType';
export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    transactionFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    transactionSuccess: (state, action: PayloadAction<TransactionData[]>) => {
      console.log(`action.payload transactionSuccess${action.payload}`);
      state.loading = false;
      state.data = action.payload;
    },
    transactionRequest: state => {
      state.loading = true;
    },
  },
});

export const {transactionFailed, transactionSuccess, transactionRequest} =
  transactionSlice.actions;

export default transactionSlice.reducer;
