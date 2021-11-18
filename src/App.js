import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Login from './component/Login';
import User from './component/User';
import Url from './component/Url';
import List from './component/List';
import NoMatch from './component/NoMatch';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        로그아웃
      </a>
    </Menu.Item>
  </Menu>
);

const App = () => {
  const [ collapsed, setCollapsed ] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" >Maaltalk Note</div>
          <Menu 
            theme="dark" 
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']} 
            mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="Menu">
              <Menu.Item key="1"><Link to="/User">유저관리</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/Url">화상방관리</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/List">화상내역</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'menutoggle',
              onClick: onCollapse,
            })}
            <Dropdown overlay={menu} placement="topCenter" arrow>
              <Avatar style={{ backgroundColor: '#ffbf00', verticalAlign: 'middle', cursor: 'pointer' }} size="large">
                user
              </Avatar>
            </Dropdown>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/User" element={<User />}></Route>
              <Route path="/Url" element={<Url />}></Route>
              <Route path="/List" element={<List />}></Route>
              <Route path="*" element={<NoMatch />}></Route>
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Dial Comunications</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
