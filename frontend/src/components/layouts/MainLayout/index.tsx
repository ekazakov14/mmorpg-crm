import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Route, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AuthStore from '../../../stores/AuthStore';
import Logo from '../../icons/Logo';
import routes from '../../../constants/routes';
import avatarIcon from '../../../assets/icons/avatar-icon_24x24.png';

const { Sider, Content, Header } = Layout;

const MainLayout = () => {
  const getSelectedKeys = (path: string) =>
    routes.filter((route) => route.path === path).map((route) => route.path);

  const history = useHistory();
  const [selectedKeys, setSelectedKeys] = useState<string[]>(
    getSelectedKeys(window.location.pathname)
  );

  const onMenuSelect = ({ selectedKeys }: any) => setSelectedKeys(selectedKeys);

  history.listen(({ pathname }) => setSelectedKeys(getSelectedKeys(pathname)));

  const RoutesList = routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      exact
      component={route.component}
    />
  ));

  const MenuItems = routes.map((route) => (
    <Menu.Item key={route.path} icon={route.icon}>
      {route.name}
      <Link to={route.path} />
    </Menu.Item>
  ));

  const layoutPaddings = 24;

  const StyledLayout = styled(Layout)`
    min-height: 100vh;
  `;

  const StyledHeader = styled(Header)`
    display: flex;
    justify-content: flex-end;
    height: 50px;
    line-height: 50px;
    padding: 0 ${layoutPaddings}px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  `;

  const StyledContent = styled(Content)`
    margin: ${layoutPaddings}px;
  `;

  const LogoWrapper = styled.div`
    padding: 15px;
  `;

  return (
    <StyledLayout className="main-layout">
      <Sider>
        <Link to="/">
          <LogoWrapper>
            <Logo theme="light" />
          </LogoWrapper>
        </Link>
        <Menu onSelect={onMenuSelect} selectedKeys={selectedKeys} theme="dark">
          {MenuItems}
        </Menu>
      </Sider>
      <Layout>
        <StyledHeader>
          <div>
            <img src={avatarIcon} alt="user profile icon"/>
            {AuthStore.user?.username}
          </div>
        </StyledHeader>
        <StyledContent>{RoutesList}</StyledContent>
      </Layout>
    </StyledLayout>
  );
};

export default MainLayout;
