import React from 'react'
import { Breadcrumb, Card, Col, Layout, Menu, Row, theme, Statistic, Collapse, Button, Divider } from 'antd';
import Barchart from '../Graph/Barchart';
import Utilitytable from '../Table/Utilitytable';
import Utilitydescript from '../Description/Utilitydescript';
import { ArrowUpOutlined } from '@ant-design/icons';
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
            <Card bordered={false}>
              <Statistic
                title={
                  <div>
                    <Row gutter={16}>
                      <Col>
                        <Statistic value={10.2} precision={1} valueStyle={{ color: '#3f8600', }} prefix={<ArrowUpOutlined />} suffix="MT" />
                      </Col>
                      <Col>
                        <span style={{ fontSize: '14px' }}>Custom Title</span>
                      </Col>
                    </Row>
                    <Divider />
                    <Row>
                      <Col>
                        sf
                      </Col>
                      <Col>
                        df
                      </Col>
                    </Row>
                  </div>
                } // Set the font size of the title
                value={
                  <div>
                    asdasd
                  </div>

                }
                precision={2}

                prefix={<ArrowUpOutlined />}
                suffix="MT"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card bordered={false}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: '#cf1322',
                }}
                // prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card bordered={false}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: '#3f8600',
                }}
                // prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card bordered={false}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: '#cf1322',
                }}
                // prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card bordered={false}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: '#3f8600',
                }}
                // prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card bordered={false}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: '#cf1322',
                }}
                // prefix={<ArrowDownOutlined />}
                suffix="%"
              />
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