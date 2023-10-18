import React from 'react'
import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider, Carousel } from 'antd';
import Barchart from '../Graph/Barchart';
import Utilitytable from '../Table/Utilitytable';
import TopCard from './TopCard';
import CostefTable from '../Table/CostefTable';
import './style.css'; // Import your custom styles


const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
      </Header>

      <TopCard></TopCard>

      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">

          <Carousel fade={true} autoplay autoplaySpeed={15000} >
            <div>
              <Card title={'L1000'}>
                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <CostefTable />
                </Card.Grid>

                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <Barchart containername={'L1000barcontainer'} />
                </Card.Grid>

                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <Utilitytable />
                </Card.Grid>
              </Card>
            </div>

            <div>
              <Card title={'L1500'}>

                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <CostefTable />
                </Card.Grid>

                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <Barchart containername={'L1500barcontainer'} />
                </Card.Grid>

                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <Utilitytable />
                </Card.Grid>
              </Card>
            </div>

            <div>
              <Card title={'KOPFRA 3'}>
                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <CostefTable />
                </Card.Grid>

                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <Barchart containername={'KOPFRA3L1000barcontainer'} />
                </Card.Grid>

                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <Utilitytable />
                </Card.Grid>
              </Card>
            </div>

            <div>
              <Card title={'KOPFRA 4'}>
                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <CostefTable />
                </Card.Grid>

                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <Barchart containername={'KOPFRA4barcontainer'} />
                </Card.Grid>

                <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
                  <Utilitytable />
                </Card.Grid>
              </Card>
            </div>


          </Carousel>


        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default Navbar