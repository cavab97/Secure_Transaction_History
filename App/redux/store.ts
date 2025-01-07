// import {
//   combineReducers,
//   legacy_createStore as createStore,
//   applyMiddleware,
// } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import AuthReducer from './Auth/Reducer';
// import PostReducer from './Post/Reducer';

// import rootSaga from './rootSaga';
// import authSaga from './Auth/Saga';
// import postSaga from './Post/Saga';
import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../redux/Auth/Reducer';
// const rootReducer = combineReducers({
//   auth: AuthReducer,
//   post: PostReducer,
// });
import saga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware)),
// );
// sagaMiddleware.run(authSaga);
// sagaMiddleware.run(postSaga);

export const store = configureStore({
  reducer: {
    auths: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(middleware),
});

sagaMiddleware.run(saga);
export type RootState = ReturnType<typeof store.getState>;
