import {all} from 'redux-saga/effects';
import authSaga from './auth/Saga';
import transactionListSaga from './transaction/Saga';

// import additional sagas as needed

export default function* rootSaga() {
  yield all([
    authSaga(),
    transactionListSaga(),
    // postSaga(),
    // add additional sagas here
  ]);
}
