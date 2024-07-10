import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@/app/store/reducer';
import rootSaga from '@/app/store/saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with configureStore
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Export the store as default
export default store;
