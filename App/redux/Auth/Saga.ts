import {call, put, takeLatest} from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED} from './Constants';
import {login} from '../../services/auth/api';
import {LoginDetails} from '../../model/Login';
import {showMessage} from 'react-native-flash-message';
import {dateToUnix, unixToDate} from '../../utils/time';
import {successLogin} from './Reducer';

/**
 * @function loginAction
 * @description Call ap api in using redux in async way by the action provided using Redux-Saga Middleware
 * @param {*} action
 */
function* loginAction(action: any) {
  try {
    const token: LoginDetails[] = yield call(login, action.payload);
    yield put(successLogin());
    showMessage({
      message: `Last Login ${unixToDate(
        dateToUnix(new Date()),
        'DD MMM YYYY HH:mm:ss',
      )}`,
      type: 'success',
    });
  } catch (error: any) {
    console.log(`error: ${error}`);
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    showMessage({
      message: errorMessage,
      type: 'danger',
    });
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginAction);
}
