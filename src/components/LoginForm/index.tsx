import { FC } from 'react';
import {
  AutoComplete,
  Button,
  Form,
  Input
} from 'antd';
import { rules } from '../../utils/rules';
import { useTypedSelector, useActions } from '../../hooks';
import { LoginFormValues } from './types';

const LoginForm: FC = () => {
  const { login } = useActions();
  const { error, isLoading } = useTypedSelector((state => state.auth));

  const submit = (values: LoginFormValues) => {
    login({ ...values });
  };

  return (
    <Form
      onFinish={(values) => submit(values)}
    >
      {error && (<div style={{ color: 'red' }}>{ error }</div>)}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <AutoComplete>
          <Input />
        </AutoComplete>
        </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <AutoComplete>
          <Input type="password" />
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

export default LoginForm;
