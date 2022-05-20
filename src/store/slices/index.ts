import { authReducer, authActions } from "./auth";

export const reducers = {
  auth: authReducer
};

export const ActionCreators = {
  ...authActions
};
