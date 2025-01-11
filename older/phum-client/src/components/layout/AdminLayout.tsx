import React from 'react';
import { Layout, Menu, theme } from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    SettingOutlined,
    TeamOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

 const items = [
    {
        key: '/admin/dashboard',
        label: <Link to="/admin/dashboard">Dashboard</Link>,
        icon: <HomeOutlined />,
    },
    {
        key: '/admin/profile',
        label: <Link to="/admin/profile">Profile</Link>,
        icon: <UserOutlined />,
    },
    {
        key: '/admin/about',
        label: <Link to="/admin/about">About</Link>,
        icon: <UserOutlined />,
    },
    {
        key: '/admin/user-management',
        label: 'User Management',
        icon: <TeamOutlined />,
        children: [
            {
                key: '/admin/create-admin',
                label: <Link to="/admin/user-management/create-admin">Create Admin</Link>,
                icon: <UserOutlined />,
            },
            {
                key: '/admin/create-student',
                label: <Link to="/admin/user-management/create-student">Create Student</Link>,
                icon: <TeamOutlined />,
            },
        ],
    },
    {
        key: '/admin/settings',
        label: <Link to="/admin/settings">Settings</Link>,
        icon: <SettingOutlined />,
    },
    {
        key: '/admin/applications',
        label: <Link to="/admin/applications">Applications</Link>,
        icon: <AppstoreAddOutlined />,
    },
];

const AdminLayout: React.FC = () => {
    const {
        token: { borderRadiusLG, colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div
                    style={{
                        color: 'white',
                        height: '3.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                    }}
                >
                    PH Admin
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        color: 'white',
                        background: '#001529',
                        textAlign: 'center',
                    }}
                >
                    <h1 style={{ margin: 0 }}>PH University</h1>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
