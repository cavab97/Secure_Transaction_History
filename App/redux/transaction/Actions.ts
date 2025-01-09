import {
  TRANSACTION_REQUEST,
  TRANSACTION_SUCCESS,
  TRANSACTION_FAILED,
} from './Constants';
/**
 * @function transactionRequest
 * @param {*} payload
 * @description Return type for transaction request to reducer
 * @returns state
 */
export const transactionRequest = () => ({
  type: TRANSACTION_REQUEST,
  // payload,
});

/**
 * @function transactionSuccess
 * @param {*} payload
 * @description Return type for transaction success to reducer
 * @returns state
 */
export const transactionSuccess = (payload: any) => ({
  type: TRANSACTION_SUCCESS,
  payload,
});

/**
 * @function transactionError
 * @param {*} payload
 * @description Return type for TRANSACTION failed to reducer
 * @returns state
 */
export const transactionError = (payload: any) => ({
  type: TRANSACTION_FAILED,
  payload,
});
