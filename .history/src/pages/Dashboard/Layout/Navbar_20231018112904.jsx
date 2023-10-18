import React from 'react'
import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider } from 'antd';
import Barchart from '../Graph/Barchart';
import Utilitytable from '../Table/Utilitytable';
import Utilitydescript from '../Description/Utilitydescript';
import { ArrowUpOutlined, InfoCircleOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};


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

      <div style={{ marginTop: '25px', marginBottom: '25px', padding: '0 50px' }}>
        <Row gutter={10}>
          <Col span={4}>
            <Card bordered={false} >
              <span style={{ fontSize: '20px' }}> MTD CPO </span>
              <div>
                <Row gutter={16} align={'middle'}>
                  <Col>
                    <span style={{ fontSize: '35px', color: '#3f8600' }}>10.2 MT</span>
                  </Col>
                  <Col>
                    <span style={{ fontSize: '14px' }}>
                      <ArrowUpOutlined />
                      <span> 0.7 % </span>
                      MTD Volume
                    </span>
                  </Col>
                </Row>
              </div>
            </Card>

          </Col>
          <Col span={4}>
            <Card bordered={false} >
              <span style={{ fontSize: '20px' }}> MTD CPO </span>
              <div>
                <Row gutter={16} align={'middle'}>
                  <Col>
                    <span style={{ fontSize: '35px', color: '#3f8600' }}>10.2 MT</span>
                  </Col>
                  <Col>
                    <span style={{ fontSize: '14px' }}>
                      <ArrowUpOutlined />
                      <span> 0.7 % </span>
                      MTD Volume
                    </span>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col span={4}>
          <Card bordered={false} >
              <span style={{ fontSize: '20px' }}> MTD CPO </span>
              <div>
                <Row gutter={16} align={'middle'}>
                  <Col>
                    <span style={{ fontSize: '35px', color: '#3f8600' }}>10.2 MT</span>
                  </Col>
                  <Col>
                    <span style={{ fontSize: '14px' }}>
                      <ArrowUpOutlined />
                      <span> 0.7 % </span>
                      MTD Volume
                    </span>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col span={4}>
          <Card bordered={false} >
              <span style={{ fontSize: '20px' }}> MTD CPO </span>
              <div>
                <Row gutter={16} align={'middle'}>
                  <Col>
                    <span style={{ fontSize: '35px', color: '#3f8600' }}>10.2 MT</span>
                  </Col>
                  <Col>
                    <span style={{ fontSize: '14px' }}>
                      <ArrowUpOutlined />
                      <span> 0.7 % </span>
                      MTD Volume
                    </span>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col span={4}>
          <Card bordered={false} >
              <span style={{ fontSize: '20px' }}> MTD CPO </span>
              <div>
                <Row gutter={16} align={'middle'}>
                  <Col>
                    <span style={{ fontSize: '35px', color: '#3f8600' }}>10.2 MT</span>
                  </Col>
                  <Col>
                    <span style={{ fontSize: '14px' }}>
                      <ArrowUpOutlined />
                      <span> 0.7 % </span>
                      MTD Volume
                    </span>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col span={4}>
          <Card bordered={false} >
              <span style={{ fontSize: '20px' }}> MTD CPO </span>
              <div>
                <Row gutter={16} align={'middle'}>
                  <Col>
                    <span style={{ fontSize: '35px', color: '#3f8600' }}>10.2 MT</span>
                  </Col>
                  <Col>
                    <span style={{ fontSize: '14px' }}>
                      <ArrowUpOutlined />
                      <span> 0.7 % </span>
                      MTD Volume
                    </span>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>



      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">

          <Card title="Daily Utility Usage">

            <Card.Grid style={{ width: '50%', textAlign: 'center', }}>
              <Barchart />
            </Card.Grid>

            <Card.Grid style={{ width: '50%', textAlign: 'center', }}>
              <Utilitytable />
            </Card.Grid>
            {/* <Card.Grid style={{ width: '50%', textAlign: 'center', }}>
              <Utilitydescript/>
            </Card.Grid> */}
            {/* <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid> */}
          </Card>


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