import type React from 'react';
import { UserOutlined } from '@ant-design/icons';
import UsersList from '../components/lists/UsersList';

type Route = {
  path: string,
  name: string,
  component: React.ComponentType,
  icon?: React.ReactNode,
};

const routes: Route[] = [
  {
    path: '/users',
    name: 'Пользователи',
    component: UsersList,
    icon: <UserOutlined />,
  },
];

export default routes;