import {call, put} from 'redux-saga/effects';
import {login} from '../../services/auth/api';
import {successLogin} from './Reducer';

/**
 * @function loginAction
 * @description Call ap api in using redux in async way by the action provided using Redux-Saga Middleware
 * @param {*} action
 */
export function* loginAction(action: any) {
  try {
    const token = yield call(login, action.payload);
    yield put(successLogin());
  } catch (error) {
    console.log(`error: ${error}`);
    // yield put(loginError(error.message));
  }
}
