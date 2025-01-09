import {all} from 'redux-saga/effects';
import authSaga from './auth/Saga';

// import additional sagas as needed

export default function* rootSaga() {
  yield all([
    authSaga(),
    // postSaga(),
    // add additional sagas here
  ]);
}
