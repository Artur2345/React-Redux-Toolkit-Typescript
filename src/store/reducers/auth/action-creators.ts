import { Dispatch } from 'redux';
import axios from 'axios';
import {
  AuthAction,
  AuthActionEnum,
  ISetIsAuthAction,
  ISetIsLoadingAction,
  ISetUserAction,
  ISetErrorAction,
} from './types';
import { IUser } from '../../../models/IUser';

export const setIsAuth = (isAuth: boolean): ISetIsAuthAction => ({ type: AuthActionEnum.SET_IS_AUTH, payload: isAuth });
export const setIsLoading = (isLoading: boolean): ISetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: isLoading });
export const setUser = (user: IUser): ISetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user });
export const setError = (error: string): ISetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error });

export const fetchUsers = (
  username: string,
  password: string,
) => async (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch(setIsLoading(true));

    const response = await axios.get<Array<IUser>>('./users.json');
    const mockUser = response.data.find((user) => user.username === username);

    if (mockUser) {
      if (mockUser.password === password) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', username);
        dispatch(setUser(mockUser));
      } else {
        dispatch(setError('Incorrect password!'))
      }
    } else {
      dispatch(setError('User not found!'));
    }
  } catch (err) {
    if (err instanceof Error) {
      dispatch(setError(err.message));
    }
  } finally {
    dispatch(setIsLoading(false));
  }
}
