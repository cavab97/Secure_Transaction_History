import {call, put, takeLatest} from 'redux-saga/effects';
import {getTransaction} from '../../services/transaction/api';
import {TRANSACTION_REQUEST} from './Constants';
import {TransactionData} from '../../model/TransactionType';
import {transactionFailed, transactionSuccess} from './Reducer';

/**
 * @function transactionAction
 * @description Call ap api in using redux in async way by the action provided using Redux-Saga Middleware
 * @param {*} action
 */

// The generator function
function* transactionAction(
  action: TransactionData,
): Generator<any, void, TransactionData[]> {
  try {
    const transactions: TransactionData[] = yield call(getTransaction);

    yield put(transactionSuccess(transactions));
  } catch (error: any) {
    yield put(transactionFailed(error.message));
  }
}

export default function* transactionListSaga() {
  yield takeLatest(TRANSACTION_REQUEST, transactionAction);
}
