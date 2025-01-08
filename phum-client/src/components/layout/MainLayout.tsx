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
        key: '1',
        label: <Link to="/dashboard">Dashboard</Link>,
        icon: <HomeOutlined />,
    },
    {
        key: '2',
        label: <Link to="/profile">Profile</Link>,
        icon: <UserOutlined />,
    },
    {
        key: '3',
        label: <Link to="/about">About</Link>,
        icon: <UserOutlined />,
    },
    {
        key: '3',
        label: 'User Management',
        icon: <TeamOutlined />,
        children: [
            {
                key: '3-1',
                label: <Link to="/user-management/create-admin">Create Admin</Link>,
                icon: <UserOutlined />,
            },
            {
                key: '3-2',
                label: <Link to="/user-management/create-student">Create Student</Link>,
                icon: <TeamOutlined />,
            },
        ],
    },
    {
        key: '4',
        label: <Link to="/settings">Settings</Link>,
        icon: <SettingOutlined />,
    },
    {
        key: '5',
        label: <Link to="/applications">Applications</Link>,
        icon: <AppstoreAddOutlined />,
    },
];

const MainLayout: React.FC = () => {
    const {
        token: { borderRadiusLG },
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
                    PH Student
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{ color: 'white' }}>
                    <h1 style={{ margin: 0 }}>PH University</h1>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,

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

export default MainLayout;
