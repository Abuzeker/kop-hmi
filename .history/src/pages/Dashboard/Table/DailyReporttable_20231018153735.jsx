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
                        dataIndex: 'Col',
                        key: 'Col',
                    },
                    {
                        title: 'L1000',
                        dataIndex: 'Col',
                        key: 'Col',
                    },
                    {
                        title: '600TPD',
                        dataIndex: 'Col',
                        key: 'Col',
                    },
                    {
                        title: 'L450',
                        dataIndex: 'Col',
                        key: 'Col',
                    },
                ]
            },

        ],
    },

    {
        title: 'KOP',
        children: [
            {
                title: 'MSM',
                children: [
                    {
                        title: 'L1500',
                        dataIndex: 'Col',
                        key: 'Col',
                    },
                    {
                        title: 'L1000',
                        dataIndex: 'Col',
                        key: 'Col',
                    },
                    {
                        title: '600TPD',
                        dataIndex: 'Col',
                        key: 'Col',
                    },
                    {
                        title: 'L450',
                        dataIndex: 'Col',
                        key: 'Col',
                    },
                ]
            },

        ],
    },

    {
        title: () => (
            <div>
                Processing Cost<br /> RM/MT  %
            </div>
        ),
        dataIndex: 'PCM',
        key: 'PCM',
        width: 100,
        fixed: '',

    },
    {
        title: 'Yield %',
        dataIndex: 'Yield',
        key: 'Yield',
        width: 80,
        fixed: 'right',
    },
    {
        title: 'PR %',
        dataIndex: 'PR',
        key: 'PR',
        fixed: 'right',
    },

    {
        title: 'Quality Avrg',
        children: [
            {
                title: 'FFA %',
                dataIndex: 'FFA',
                key: 'FFA',
            },
            {
                title: 'Col',
                dataIndex: 'Col',
                key: 'Col',
            },
            {
                title: () => (
                    <div>
                        PFAb <br /> Purity %
                    </div>
                ),
                dataIndex: 'Purity',
                key: 'Purity',
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




