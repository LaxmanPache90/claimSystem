import '../styles/globals.css'
import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import Router from 'next/router'
import { Divider } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PieChartOutlined,
  UserAddOutlined ,
} from '@ant-design/icons';

function MyApp({ Component, pageProps }) {

  const { Header, Sider, Content } = Layout;
  const [collapsed, setcollapsed] = useState(false)
   const toggle = () => {
    setcollapsed(
        !collapsed,
      );
    };
  return<> 
  
  <Layout style={{height:'100vh'}}>
        <Sider trigger={null} style={{background:'white'}} collapsible collapsed={collapsed}>
          <div className={styles.logo} />
          <Header style={{background:'white' , color:'#1890FF' , display:'flex', justifyContent:'center', padding:0}} onClick={toggle} >
          { collapsed ? <  MenuUnfoldOutlined  /> :<MenuFoldOutlined />}
          </Header>
      
          <Menu   theme="light" style={{color:'#1890FF'}} mode="inline" defaultSelectedKeys={['1']}>
          
            <Menu.Item  onClick={()=>Router.push('/')} key="2" icon={<PieChartOutlined />}>
          Apply Expences
            </Menu.Item>
            <Menu.Item  onClick={()=>Router.push('/inviteuser')} key="3" icon={<UserAddOutlined  />}>
               Invite user
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.sitelayout}>
          <Header className={styles.sitelayoutbackground} style={{ padding: 0 }}>
            {/* {React.createElement(collapsed? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })} */}
            {/* <div><  MenuUnfoldOutlined  style={{ color:'white'}}/></div> */}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
           <Component {...pageProps} />
          </Content>
        </Layout>
      </Layout>
  
  
  
  
 </>
}

export default MyApp
