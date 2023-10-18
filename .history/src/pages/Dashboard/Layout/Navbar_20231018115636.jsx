import React from 'react'
import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider } from 'antd';
import Barchart from '../Graph/Barchart';
import Utilitytable from '../Table/Utilitytable';
import Utilitydescript from '../Description/Utilitydescript';
import { ArrowUpOutlined, InfoCircleOutlined } from '@ant-design/icons';
import TinyBar from '../Graph/TinyBar';
import TinyProgress from '../Graph/TinyProgress';
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
              <span style={{ fontSize: '20px' }}>MTD CPO </span>
              <div>
                <Row gutter={16} align={'middle'}>
                  <Col span={12}>
                    <span style={{ fontSize: '25px', color: '#3f8600' }}>10.2 MT</span>
                    <br />
                    <span style={{ fontSize: '11px' }}>
                      <InfoCircleOutlined />
                      <span> 20 Days Remaining</span>
                    </span>
                  </Col>
                  <Col span={12}>
                    <TinyProgress />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>

          <Col span={4}>
            <Card bordered={false} >
              <span style={{ fontSize: '20px' }}> CPO </span>
              <span style={{ fontSize: '10px' }}>11/10/2023</span>
              <div>
                <Row gutter={16} align={'middle'}>
                  <Col span={12}>
                    <span style={{ fontSize: '25px', color: '#3f8600' }}>10.2 MT</span>
                    <br />
                    <span style={{ fontSize: '10px' }}>
                      <ArrowUpOutlined />
                      <span> 0.7 % </span>
                      MTD Volume
                    </span>
                  </Col>
                  <Col span={12}>
                    <TinyBar />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>

          <Col span={4}>
            <Card bordered={false} >
              <span style={{ fontSize: '20px' }}>MTD CPO </span>
              <div>
                <Row gutter={16} align={'middle'}>
                  <Col span={12}>
                    <span style={{ fontSize: '25px', color: '#3f8600' }}>10.2 MT</span>
                    <br />
                    <span style={{ fontSize: '11px' }}>
                      <InfoCircleOutlined />
                      <span> 20 Days Remaining</span>
                    </span>
                  </Col>
                  <Col span={12}>
                    <TinyProgress />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>

          <Col span={4}>
            <Card bordered={false} >
              <span style={{ fontSize: '20px' }}> CPO </span>
              <span style={{ fontSize: '10px' }}>11/10/2023</span>
              <div>
                <Row gutter={16} align={'middle'}>
                  <Col span={12}>
                    <span style={{ fontSize: '25px', color: '#3f8600' }}>10.2 MT</span>
                    <br />
                    <span style={{ fontSize: '10px' }}>
                      <ArrowUpOutlined />
                      <span> 0.7 % </span>
                      MTD Volume
                    </span>
                  </Col>
                  <Col span={12}>
                    <TinyBar />
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