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
    Date: '10/10/2023',
    type: 'PHOSPHORIC',
    Unit: 86000,
  },
  {
    Date: '10/10/2023',
    type: 'LNG',
    Unit: 68000,
  },
  {
    Date: '10/10/2023',
    type: 'ELEKTRIK',
    Unit: 50000,
  },
  {
    Date: '10/10/2023',
    type: 'WATER',
    Unit: 23000,
  },
  {
    Date: '10/10/2023',
    type: 'PAC',
    Unit: 7000,
  },

  {
    Date: '11/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 75566,
  },
  {
    Date: '11/10/2023',
    type: 'PHOSPHORIC',
    Unit: 78524,
  },
  {
    Date: '11/10/2023',
    type: 'LNG',
    Unit: 56754,
  },
  {
    Date: '11/10/2023',
    type: 'ELEKTRIK',
    Unit: 23145,
  },
  {
    Date: '11/10/2023',
    type: 'WATER',
    Unit: 13578,
  },
  {
    Date: '11/10/2023',
    type: 'PAC',
    Unit: 45566,
  },

  {
    Date: '12/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 48000,
  },
  {
    Date: '12/10/2023',
    type: 'PHOSPHORIC',
    Unit: 65752,
  },
  {
    Date: '12/10/2023',
    type: 'LNG',
    Unit: 68326,
  },
  {
    Date: '12/10/2023',
    type: 'ELEKTRIK',
    Unit: 9755,
  },
  {
    Date: '12/10/2023',
    type: 'WATER',
    Unit: 8412,
  },
  {
    Date: '12/10/2023',
    type: 'PAC',
    Unit: 32457,
  },

  {
    Date: '13/10/2023',
    type: 'BLEACHING EARTH',
    Unit: 48000,
  },
  {
    Date: '13/10/2023',
    type: 'PHOSPHORIC',
    Unit: 65752,
  },
  {
    Date: '13/10/2023',
    type: 'LNG',
    Unit: 68326,
  },
  {
    Date: '13/10/2023',
    type: 'ELEKTRIK',
    Unit: 9755,
  },
  {
    Date: '13/10/2023',
    type: 'WATER',
    Unit: 8412,
  },
  {
    Date: '13/10/2023',
    type: 'PAC',
    Unit: 32457,
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
      height: 400, // Set the height of the chart

      label: {
        position: 'bottom', // 'top', 'bottom', 'middle',
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
        Date: {
          alias: 'Date',
        },
        Unit: {
          alias: 'MT',
        },
      },
      legend: { // Configure the legend
        position: 'bottom', // 'top', 'bottom', 'left', 'right'
      },
    });

    // Simulate legend hover every 5 seconds
    const legendItems = columnPlot.getComponents().filter((comp) => comp.type === 'legend-item');
    let currentIndex = 0;

    const simulateLegendHover = () => {
      legendItems.forEach((item, index) => {
        if (index === currentIndex) {
          item.emit('item:mouseenter');
        } else {
          item.emit('item:mouseleave');
        }
      });
      currentIndex = (currentIndex + 1) % legendItems.length;
    };
    columnPlot.render();

    const intervalId = setInterval(simulateLegendHover, 5000); // Hover every 5 seconds


    return () => {
      columnPlot.destroy();
      clearInterval(intervalId);
    }
  }, [])

  return (
    <div id='container'></div>
  )
}
export default Barchart

