import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
// import { reducers } from './reducers';
import { reducers } from './slices';

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
