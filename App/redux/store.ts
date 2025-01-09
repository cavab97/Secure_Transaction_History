import createSagaMiddleware from 'redux-saga';

import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth/Reducer';

import saga from './rootSaga';
import transactionSlice from './transaction/Reducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    auths: authSlice,
    transaction: transactionSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(middleware),
});

sagaMiddleware.run(saga);
export type RootState = ReturnType<typeof store.getState>;
