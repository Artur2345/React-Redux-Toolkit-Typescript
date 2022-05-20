import { IUser } from '../../models/IUser';

export interface IAuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}
