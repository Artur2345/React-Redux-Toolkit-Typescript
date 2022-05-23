import { FC, useState } from 'react';
import {
  AutoComplete,
  Button,
  Form,
  Input
} from 'antd';
import { rules } from '../../utils/rules';
import { useTypedSelector, useActions } from '../../hooks';

const Index: FC = () => {
  const { login } = useActions();
  const { error, isLoading } = useTypedSelector((state => state.auth));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    login({ username, password });
  };

  return (
    <Form
      onFinish={submit}
    >
      {error && (<div style={{ color: 'red' }}>{ error }</div>)}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <AutoComplete>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </AutoComplete>
        </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <AutoComplete>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </AutoComplete>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Index;
