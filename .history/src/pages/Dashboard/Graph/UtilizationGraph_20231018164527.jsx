import React, { useState, useEffect } from 'react';
import { BidirectionalBar } from '@antv/g2plot';

export const data = [
  { country: 'L1500', 'MSM Utilization Rate': 86.4, 'CCNO Utilization Rate': 12.3 },
  { country: 'L1000', 'MSM Utilization Rate': 15.4, 'CCNO Utilization Rate': 2.3 },
  { country: '600TPD', 'MSM Utilization Rate': 13.4, 'CCNO Utilization Rate': 12.3 },
  { country: 'L450', 'MSM Utilization Rate': 13.4, 'CCNO Utilization Rate': 12.3 },
  { country: 'KOPFRA 4', 'MSM Utilization Rate': 13.4, 'CCNO Utilization Rate': 12.3 },
  { country: 'KOPFRA 5', 'MSM Utilization Rate': 13.4, 'CCNO Utilization Rate': 12.3 },

];




const UtilizationGraph = ({container}) => {

    useEffect(() => {
        const BidirectionalBarPlot = new BidirectionalBar(container, {
            data,
            xField: 'country',
            xAxis: {
              position: 'bottom',
            },
            interactions: [{ type: 'active-region' }],
            yField: ['2016年耕地总面积', '2016年转基因种植面积'],
            tooltip: {
              shared: true,
              showMarkers: false,
            },
          });
          BidirectionalBarPlot.render();

    
      return () => {
        BidirectionalBarPlot.destroy();
      }
    }, [])
    

  return (
    <div id={container}></div>
  )
}

export default UtilizationGraph