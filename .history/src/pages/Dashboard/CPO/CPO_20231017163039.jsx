import React from 'react'
import { Badge, Descriptions } from 'antd';
import Navbar from '../Layout/Navbar';
import Bar from '../Graph/Bar';
// import { Bar } from '@antv/g2plot';


const data = [
  {
    type: '家具家电',
    sales: 38,
  },
  {
    type: '粮油副食',
    sales: 52,
  },
  {
    type: '生鲜水果',
    sales: 61,
  },
  {
    type: '美容洗护',
    sales: 145,
  },
  {
    type: '母婴用品',
    sales: 48,
  },
  {
    type: '进口食品',
    sales: 38,
  },
  {
    type: '食品饮料',
    sales: 38,
  },
  {
    type: '家庭清洁',
    sales: 38,
  },
];
// const items = [
//   {
//     key: '1',
//     label: 'Product',
//     children: 'Cloud Database',
//   },
//   {
//     key: '2',
//     label: 'Billing Mode',
//     children: 'Prepaid',
//   },
//   {
//     key: '3',
//     label: 'Automatic Renewal',
//     children: 'YES',
//   },
//   {
//     key: '4',
//     label: 'Order time',
//     children: '2018-04-24 18:00:00',
//   },
//   {
//     key: '5',
//     label: 'Usage Time',
//     children: '2019-04-24 18:00:00',
//     span: 2,
//   },
//   {
//     key: '6',
//     label: 'Status',
//     children: <Badge status="processing" text="Running" />,
//     span: 3,
//   },
//   {
//     key: '7',
//     label: 'Negotiated Amount',
//     children: '$80.00',
//   },
//   {
//     key: '8',
//     label: 'Discount',
//     children: '$20.00',
//   },
//   {
//     key: '9',
//     label: 'Official Receipts',
//     children: '$60.00',
//   },
//   {
//     key: '10',
//     label: 'Config Info',
//     children: (
//       <>
//         Data disk type: MongoDB
//         <br />
//         Database version: 3.4
//         <br />
//         Package: dds.mongo.mid
//         <br />
//         Storage space: 10 GB
//         <br />
//         Replication factor: 3
//         <br />
//         Region: East China 1
//         <br />
//       </>
//     ),
//   },
// ];


const CPO = () => {
  


  return (
    <div id='container'>
      <Bar/>



      {/* {data[0].sales} */}
       <Navbar/>
     {/* asdasdas
      <Descriptions title="User Info" bordered /> */}
    </div>
  )
}

export default CPO


