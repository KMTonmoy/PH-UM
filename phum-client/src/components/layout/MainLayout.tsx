import React from 'react';
import { Layout, Menu, theme } from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    SettingOutlined,
    TeamOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: '1',
        label: 'Dashboard',
        icon: <HomeOutlined />,
    },
    {
        key: '2',
        label: 'Profile',
        icon: <UserOutlined />,
    },
    {
        key: '3',
        label: 'User Management',
        icon: <TeamOutlined />,
        children: [
            {
                key: '3-1',
                label: 'Create Admin',
                icon: <UserOutlined />,
            },
            {
                key: '3-2',
                label: 'Create Student',
                icon: <TeamOutlined />,
            },
        ],
    },
    {
        key: '4',
        label: 'Settings',
        icon: <SettingOutlined />,
    },
    {
        key: '5',
        label: 'Applications',
        icon: <AppstoreAddOutlined />,
    },
];

const MainLayout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG }, 
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
                    PH University
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{ background: colorBgContainer, textAlign: 'center' }}>
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
                        Main Layout Goes Here. Hello World 🌍🌍🌍
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
   

