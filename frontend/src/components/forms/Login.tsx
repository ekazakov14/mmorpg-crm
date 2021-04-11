import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import authStore from '../../stores/AuthStore';
import { LoginDto } from '../../../../backend/src/modules/auth/controllers/dto';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

export const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setLogin(target.value);
  const handlePasswordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setPassword(target.value);

  const onFinish = async () => {
    try {
      const data: LoginDto = { login, password };
      await authStore.login(data);
      history.push('/');
    } catch (e) {
    }
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input 
        value={login}
        onInput={handleLoginChange}
        prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Username or email" />
      </Form.Item>
      
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          value={password}
          onInput={handlePasswordChange}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};