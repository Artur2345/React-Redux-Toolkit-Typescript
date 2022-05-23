import { authReducer, authActions } from "./auth";
import { eventReducer, eventActions } from './event';

export const reducers = {
  auth: authReducer,
  event: eventReducer,
};

export const allActionCreators = {
  ...authActions,
  ...eventActions
}
