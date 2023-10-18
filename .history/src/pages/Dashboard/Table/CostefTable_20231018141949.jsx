import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Date',
    dataIndex: 'Date',
    key: 'Date',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Processing Cost RM/MT',
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
        title: 'PFAb Purity %',
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
    Date: '11/10/2023',
    PCM: i + 20.3,
    Yield: (i/2 + 0.7).toFixed(2),
    PR: i + 0.7,
    FFA: (i/10 + 20.3).toFixed(2),
    Col: i + 20.3,
    Purity: i + 0.3,
  });
}


const CostefTable = () => (
  <Table
    pagination={false}
    columns={columns}
    dataSource={data}
    bordered
    size="small"
  />
);
export default CostefTable;



