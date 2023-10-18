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
                        dataIndex: 'MSM L1500',
                        key: 'MSM L1500',
                    },
                    {
                        title: 'L1000',
                        dataIndex: 'MSM L1000',
                        key: 'MSM L1000',
                    },
                    {
                        title: '600TPD',
                        dataIndex: 'MSM 600TPD',
                        key: 'MSM 600TPD',
                    },
                    {
                        title: 'L450',
                        dataIndex: 'MSM L450',
                        key: 'MSM L450',
                    },
                    {
                        title: 'Total',
                        dataIndex: 'MSM Total',
                        key: 'MSM Total',
                    },
                    {
                        title: 'Percent %',
                        dataIndex: 'MSM Percent',
                        key: 'MSM Percent',
                    },
                ]
            },
            {
                title: 'CCNO BLENDED/CPKO',
                children: [
                    {
                        title: 'L1500',
                        dataIndex: 'CCNO L1500',
                        key: 'CCNO L1500',
                    },
                    {
                        title: 'L1000',
                        dataIndex: 'CCNO L1000',
                        key: 'CCNO L1000',
                    },
                    {
                        title: '600TPD',
                        dataIndex: 'CCNO 600TPD',
                        key: 'CCNO 600TPD',
                    },
                    {
                        title: 'L450',
                        dataIndex: 'CCNO L450',
                        key: 'CCNO L450',
                    },
                    {
                        title: 'Total',
                        dataIndex: 'CCNO Total',
                        key: 'CCNO Total',
                    },
                    {
                        title: 'Percent %',
                        dataIndex: 'CCNO Percent',
                        key: 'CCNO Percent',
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
        PCM: i + 20.3,
        Yield: (i / 2 + 0.7).toFixed(2),
        PR: i + 0.7,
        FFA: (i / 10 + 20.3).toFixed(2),
        Col: i + 20.3,
        Purity: i + 0.3,
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




