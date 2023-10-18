import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Column } from '@antv/g2plot';


const data = [
  {
    Date: '10/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 38000,
  },
  {
    Date: '11/10/2023',
    type: 'PHOSPHORIC',
    Unit: 86000,
  },
  {
    Date: '12/10/2023',
    type: 'LNG',
    Unit: 68000,
  },
  {
    Date: '13/10/2023',
    type: 'ELEKTRIK',
    Unit: 50000,
  },
  {
    Date: '14/10/2023',
    type: 'WATER',
    Unit: 23000,
  },
  {
    Date: '15/10/2023',
    type: 'PAC',
    Unit: 7000,
  },
];


const Barchart = () => {


  useEffect(() => {

    const columnPlot = new Column('container', {
      data,
      xField: 'Date',
      yField: 'Unit',
      seriesField: 'type',
      isStack: true,
      label: {
        position: 'top', // 'top', 'bottom', 'middle',
        style: {
          fill: '#FFFFFF',
          opacity: 0.6,
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: '类别',
        },
        sales: {
          alias: '销售额',
        },
      },
    });
    columnPlot.render();

    return () => {columnPlot.destroy(); }
  }, [])

  return (
    <div id='container'></div>
  )
}
export default Barchart

