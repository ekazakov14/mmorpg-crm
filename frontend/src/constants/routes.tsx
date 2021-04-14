import type React from 'react';
import { UserOutlined } from '@ant-design/icons';
import UsersTable from '../components/tables/UsersTable';

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
    component: UsersTable,
    icon: <UserOutlined />,
  },
];

export default routes;