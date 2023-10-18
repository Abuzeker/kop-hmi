import React from 'react';
import { Space, Table, Tag, Carousel, Divider } from 'antd';

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
                        let color = Status === 'Over'? 'volcano':'green'

                        // let color = Status.length > 5 ? 'geekblue' : 'green';
                        if (Status === 'loser') {
                            color = 'volcano';
                        }
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
            Status: ['nice', 'developer'],
        },
        {
            key: '1',
            Component: 'LNG',
            Usage: 3200,
            RMMT: '2.9',
            Cost: 555,
            Status: ['nice', 'developer'],
        },
        {
            key: '1',
            Component: 'ELEKTRIK',
            Usage: 3200,
            RMMT: '2.9',
            Cost: 555,
            Status: ['nice', 'developer'],
        },
        {
            key: '1',
            Component: 'WATER',
            Usage: 3200,
            RMMT: '2.9',
            Cost: 555,
            Status: ['nice', 'developer'],
        },
        {
            key: '1',
            Component: 'PAC',
            Usage: 3200,
            RMMT: '2.9',
            Cost: 555,
            Status: ['nice', 'developer'],
        },
    ];

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };


    return (

        <Carousel afterChange={onChange} dotPosition='top'>
            <div>
                <Divider>12/10/2023</Divider>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>



    )
}
export default Utilitytable

