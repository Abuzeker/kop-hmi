import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Column } from '@antv/g2plot';


const data = [
  {
    Date: '10/10/2023',
    Unit: 38000,
  },
  {
    Date: '11/10/2023',
    Unit: 86000,
  },
  {
    Date: '12/10/2023',
    Unit: 68000,
  },
  {
    Date: '13/10/2023',
    Unit: 50000,
  },
  {
    Date: '14/10/2023',
    Unit: 23000,
  },
  {
    Date: '15/10/2023',
    Unit: 7000,
  },
];


const Bar = () => {


  useEffect(() => {

    const columnPlot = new Column('container', {
      data,
      xField: 'Date',
      yField: 'Unit',
      label: {
        position: 'middle', // 'top', 'bottom', 'middle',
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
export default Bar

