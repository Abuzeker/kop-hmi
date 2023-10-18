import React from 'react';
import { Table } from 'antd';
import './tablestyle.css'; // Import your custom styles


const columns = [
    {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date',
        width: 100,
        fixed: 'left',
    },

    {
        title: 'KOP',
        children: [
            {
                title: 'MSM',
                children: [
                    {
                        title: 'L1500',
                        dataIndex: 'MSML1500',
                        key: 'MSML1500',
                    },
                    {
                        title: 'L1000',
                        dataIndex: 'MSML1000',
                        key: 'MSML1000',
                    },
                    {
                        title: '600TPD',
                        dataIndex: 'MSM600TPD',
                        key: 'MSM600TPD',
                    },
                    {
                        title: 'L450',
                        dataIndex: 'MSML450',
                        key: 'MSML450',
                    },
                    {
                        title: 'Total',
                        dataIndex: 'MSMTotal',
                        key: 'MSMTotal',
                    },
                    {
                        title: 'Percent %',
                        dataIndex: 'MSMPercent',
                        key: 'MSMPercent',
                    },
                ]
            },
            {
                title: 'CCNO BLENDED/CPKO',
                children: [
                    {
                        title: 'L1500',
                        dataIndex: 'CCNOL1500',
                        key: 'CCNOL1500',
                    },
                    {
                        title: 'L1000',
                        dataIndex: 'CCNOL1000',
                        key: 'CCNOL1000',
                    },
                    {
                        title: '600TPD',
                        dataIndex: 'CCNO600TPD',
                        key: 'CCNO600TPD',
                    },
                    {
                        title: 'L450',
                        dataIndex: 'CCNOL450',
                        key: 'CCNOL450',
                    },
                    {
                        title: 'Total',
                        dataIndex: 'CCNOTotal',
                        key: 'CCNOTotal',
                    },
                    {
                        title: 'Percent %',
                        dataIndex: 'CCNOPercent',
                        key: 'CCNOPercent',
                    },
                ]
            },

        ],
    },


];
const data = [];
for (let i = 0; i < 7; i++) {
    data.push({
        key: i,
        Date: `${i + 10}/10/2023`,
        MSML1500: i + 20.3,
        MSML1000: (i / 2 + 0.7).toFixed(2),
        MSM600TPD: i + 0.7,
        MSML450: (i / 10 + 20.3).toFixed(2),
        MSMTotal: i + 20.3,
        MSMPercent: i + 0.3,
        
        CCNOL1500: i + 20.3,
        CCNOL1000: (i / 2 + 0.7).toFixed(2),
        CCNO600TPD: i + 0.7,
        CCNOL450: (i / 10 + 20.3).toFixed(2),
        CCNOTotal: i + 20.3,
        CCNOPercent: i + 0.3,
    });
}


const DailyReporttable = () => (
    <Table
        className="custom-table"
        pagination={false}
        columns={columns}
        dataSource={data}
        size="small"
    />
);
export default DailyReporttable;




