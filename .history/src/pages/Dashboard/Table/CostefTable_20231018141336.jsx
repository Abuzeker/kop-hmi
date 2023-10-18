import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Date',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Processing Cost RM/MT',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Yield %',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
  {
    title: 'PR %',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
  
  {
    title: 'Quality Avrg',
    children: [
      {
        title: 'FFA %',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Col',
        dataIndex: 'companyName',
        key: 'companyName',
      },
      {
        title: 'PFAb Purity %',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}


const CostefTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size="small"
  />
);
export default CostefTable;



