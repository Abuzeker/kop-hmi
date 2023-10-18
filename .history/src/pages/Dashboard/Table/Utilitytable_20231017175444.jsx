import React from 'react';
import { Space, Table, Tag, Carousel } from 'antd';

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
        // {
        //     title: 'Status',
        //     key: 'Status',
        //     dataIndex: 'Status',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map((tag) => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },

    ];
    const data = [
        {
            key: '1',
            Component: 'BE',
            Usage: 3200,
            RMMT: '2.9',
            Status: ['nice', 'developer'],
        },
    ];

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };


    return (

        <Carousel afterChange={onChange} dotPosition='top'>
            <div>
                <Table columns={columns} dataSource={data} pagination={false} title={'12/10/2023'}/>
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

