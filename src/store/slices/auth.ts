import { IUser } from '../../models/IUser';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from '../models/IAuthState';
import UserService from '../../api/UserService';

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = {} as IUser;
      localStorage.removeItem('auth');
      localStorage.removeItem('username');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(login.rejected, (state, { payload }) => {
      state.error = payload || '';
      state.isLoading = false;
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.isAuth = true;
    })
  }
});

const login = createAsyncThunk<
    IUser,
    { username: string; password: string; },
    { rejectValue: string }
  >(
  'auth/login',
  async ({username, password}, thunkApi) => {
    const response = await UserService.getUsers();
    const mockUser = response.data.find((user) => user.username === username);

    if (mockUser) {
      if (mockUser.password === password) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', username);

        return mockUser;
      } else {
        return thunkApi.rejectWithValue('Incorrect password!');
      }
    }

    return thunkApi.rejectWithValue('User not found!');
  }
)

export const authActions = { ...authSlice.actions, login};
export const authReducer =  authSlice.reducer;
