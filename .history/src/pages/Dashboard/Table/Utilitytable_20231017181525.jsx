import React from 'react';
import { Space, Table, Tag, Carousel, Divider } from 'antd';
import './carousel.css'; // Import your custom styles

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Utilitytable = () => {

    const columns = [
        {
            title: 'Component',
            dataIndex: 'Component',
            key: 'Component',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Usage',
            dataIndex: 'Usage',
            key: 'Usage',
        },
        {
            title: 'RM/MT',
            dataIndex: 'RMMT',
            key: 'RMMT',
        },
        {
            title: 'Cost',
            dataIndex: 'Cost',
            key: 'Cost',
        },
        {
            title: 'Status',
            key: 'Status',
            dataIndex: 'Status',
            render: (_, { Status }) => (
                <>
                    {Status.map((Status) => {
                        let color = Status === 'Over' ? 'volcano' : 'green'
                        return (
                            <Tag color={color} key={Status}>
                                {Status.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },

    ];
    const data = [
        {
            key: '1',
            Component: 'BE',
            Usage: 3200,
            RMMT: '2.9',
            Cost: 555,
            Status: ['Over'],
        },
        {
            key: '1',
            Component: 'PHOSPHORIC',
            Usage: 3200,
            RMMT: '2.9',
            Cost: 555,
            Status: ['Good'],
        },
        {
            key: '1',
            Component: 'LNG',
            Usage: 3200,
            RMMT: '2.9',
            Cost: 555,
            Status: ['Good'],
        },
        {
            key: '1',
            Component: 'ELEKTRIK',
            Usage: 3200,
            RMMT: '2.9',
            Cost: 555,
            Status: ['Over'],
        },
        {
            key: '1',
            Component: 'WATER',
            Usage: 3200,
            RMMT: '2.9',
            Cost: 555,
            Status: ['Good'],
        },
        {
            key: '1',
            Component: 'PAC',
            Usage: 3200,
            RMMT: '2.9',
            Cost: 555,
            Status: ['Over'],
        },
    ];

    return (

        <Carousel className="custom-carousel-button" dotPosition='top'>
            <div>
                <Divider textAlign={'left'}>12/10/2023</Divider>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
            <div>
                <Divider>13/10/2023</Divider>
                <Table columns={columns} dataSource={data} pagination={false} />            </div>
            <div>
                <Divider>14/10/2023</Divider>
                <Table columns={columns} dataSource={data} pagination={false} />            </div>
            <div>
                <Divider>15/10/2023</Divider>
                <Table columns={columns} dataSource={data} pagination={false} />            </div>
        </Carousel>



    )
}
export default Utilitytable

