import { IUser } from '../../../models/IUser';

export enum AuthActionEnum {
  SET_IS_AUTH = 'setIsAuth',
  SET_IS_LOADING = 'setIsLoading',
  SET_USER = 'setUser',
  SET_ERROR = 'setError'
}

export interface ISetIsAuthAction {
  type: AuthActionEnum.SET_IS_AUTH;
  payload: boolean;
}

export interface ISetIsLoadingAction {
  type: AuthActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface ISetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: IUser;
}

export interface ISetErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}

export type AuthAction =
  ISetIsAuthAction
  | ISetIsLoadingAction
  | ISetUserAction
  | ISetErrorAction;
