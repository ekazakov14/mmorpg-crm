import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import AuthStore from '../../../stores/AuthStore';
import Logo from '../../icons/Logo';
import routes from '../../../constants/routes';
import './index.scss';

const { Sider, Content, Header } = Layout;

const MainLayout = () => {
  const getSelectedKeys = (path: string) => routes
  .filter((route) => route.path === path)
  .map((route) => route.path);

  const history = useHistory();
  const [selectedKeys, setSelectedKeys] = useState<string[]>(getSelectedKeys(window.location.pathname));

  const onMenuSelect = ({ selectedKeys }: any) => setSelectedKeys(selectedKeys);

  const RoutesList = routes.map((route) => (
    <Route 
    key={route.path} 
    path={route.path}
    exact
    component={route.component} />
  ));

  const MenuItems = routes.map((route) => (
    <Menu.Item 
    key={route.path}
    icon={route.icon}>
      { route.name }
      <Link to={route.path} />
    </Menu.Item>
  ));

  history.listen(({ pathname }) => setSelectedKeys(getSelectedKeys(pathname)));

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Link to="/">
          <div className="main-layout__logo">
            <Logo theme="light" />
          </div>
        </Link>
        <Menu 
        onSelect={onMenuSelect}
        selectedKeys={selectedKeys} 
        theme="dark">{ MenuItems }</Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', boxShadow: '0 1px 4px rgb(0 21 41 / 8%)' }}>
          <div>{AuthStore.user?.username}</div>
        </Header>
        <Content style={{ margin: 24 }}>{ RoutesList }</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;