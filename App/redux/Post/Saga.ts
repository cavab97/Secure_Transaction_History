import {call, put, takeLatest} from 'redux-saga/effects';
import {getPost} from '../../services/Post/api';
import {postError, postSuccess} from './Actions';
import {POST_REQUEST} from './Constants';

/**
 * @function postAction
 * @description Call ap api in using redux in async way by the action provided using Redux-Saga Middleware
 * @param {*} action
 */

// The generator function
function* postAction(action: PostAction): Generator<any, void, Post[]> {
  try {
    // Yield the call to getPost with the action payload
    const posts: Post[] = yield call(getPost, action.payload);

    // Dispatch the success action with the posts data
    yield put(postSuccess(posts));
  } catch (error: any) {
    // Dispatch the error action with the error message
    yield put(postError(error.message));
  }
}
