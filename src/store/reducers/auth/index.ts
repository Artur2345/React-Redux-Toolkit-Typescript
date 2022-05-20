import { AuthAction, AuthActionEnum } from './types';
import { IUser } from '../../../models/IUser';
import { IAuthState } from '../../models/IAuthState';

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: '',
};

const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_IS_AUTH:
      return { ...state, isAuth: action.payload }
    case AuthActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default authReducer;
