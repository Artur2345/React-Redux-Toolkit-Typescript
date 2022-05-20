import { FC } from "react"
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../routes";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  const onLogout = () => {
    navigate(RouteNames.LOGIN);
    logout()
  }

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: 'white'}}>{`${localStorage.getItem('username')}`}</div>
            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
            >
              <Menu.Item
                key={1}
                onClick={onLogout}
              >
                Logout
              </Menu.Item>
            </Menu>
          </>
          ) : (
            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
            >
              <Menu.Item
                key={1}
                onClick={() => navigate(RouteNames.LOGIN)}
              >
                Sign in
              </Menu.Item>
            </Menu>
          )
        }
      </Row>
    </Layout.Header>
  )
}

export default Navbar;
