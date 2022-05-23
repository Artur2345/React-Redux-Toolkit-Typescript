import { FC } from "react"
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../routes";
import { useTypedSelector, useActions } from "../../hooks";
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import login from '../../pages/Login';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  const loginItems: Array<ItemType> = [
    {
      label: 'Sign in',
      onClick: login,
      key: 'login'
    }
  ];
  const logoutItems: Array<ItemType> = [
    {
      label: 'Logout',
      onClick: () => {
        navigate(RouteNames.LOGIN);
        logout();
      },
      key: 'logout'
    }
  ];

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: 'white'}}>{user.username}</div>
            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
              items={logoutItems}
            />
          </>
          ) : (
            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
              items={loginItems}
            />
          )
        }
      </Row>
    </Layout.Header>
  )
}

export default Navbar;
