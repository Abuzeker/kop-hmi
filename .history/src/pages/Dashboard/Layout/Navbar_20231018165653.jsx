import React from 'react'
import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider, Carousel } from 'antd';
import Barchart from '../Graph/Barchart';
import Utilitytable from '../Table/Utilitytable';
import TopCard from './TopCard';
import CostefTable from '../Table/CostefTable';
import './style.css'; // Import your custom styles
import DailyReporttable from '../Table/DailyReporttable';
import UtilizationGraph from '../Graph/UtilizationGraph';
import UtilizationCarosel from './UtilizationCarosel';
import MarqueeCard from './MarqueCard';
import Bleaching from '../../L1500/Bleaching';


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
        <MarqueeCard />
      </Header>

      <TopCard></TopCard>

      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">

          <div>
            <div style={{ marginBottom: '10px' }}>
              <Divider orientation='left'>Daily Operational Report</Divider>
              <Row gutter={20}>
                <Col span={14}>
                  <Card>
                    <DailyReporttable />
                  </Card>
                </Col>
                <Col span={10}>
                  <Card>
                    <UtilizationGraph container={'dailyutiliztiongraph'} />
                  </Card>
                </Col>
              </Row>

            </div>

            <div style={{ marginTop: '5px' }}>
              <Divider orientation='left'>Cost & Utilization</Divider>
              <UtilizationCarosel />
            </div>
          </div>

          <Carousel>
            <div>
              <Bleaching />
            </div>
            <div>
              <Bleaching />
            </div>
          </Carousel>

        </div>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        FGV KOP ©2023 Created by IOTCS
      </Footer>
    </Layout>
  )
}

export default Navbar