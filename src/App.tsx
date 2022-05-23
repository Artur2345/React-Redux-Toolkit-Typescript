import { FC, useEffect } from 'react';
import { Layout } from "antd";

import { AppRouter, Navbar } from "./components";
import { useActions } from './hooks';
import { IUser } from './models/IUser';
import './App.css';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username') || ''} as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
