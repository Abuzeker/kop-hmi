import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Column } from '@antv/g2plot';


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


  // const columnPlot = new Column('container', {
  //   data,
  //   xField: 'type',
  //   yField: 'sales',
  //   label: {
  //     position: 'middle', // 'top', 'bottom', 'middle',
  //     style: {
  //       fill: '#FFFFFF',
  //       opacity: 0.6,
  //     },
  //   },
  //   xAxis: {
  //     label: {
  //       autoHide: true,
  //       autoRotate: false,
  //     },
  //   },
  //   meta: {
  //     type: {
  //       alias: '类别',
  //     },
  //     sales: {
  //       alias: '销售额',
  //     },
  //   },
  // });
  

const Bar = () => {
  const columnPlot = new Column('container', {
    data,
    xField: 'type',
    yField: 'sales',
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


    return(  columnPlot.render )
}
export default Bar

