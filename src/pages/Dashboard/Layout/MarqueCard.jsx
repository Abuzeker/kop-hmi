import React from 'react';
import { Card } from 'antd';
import './style.css'; // Import your CSS file

const MarqueeCard = () => {
  return (
    <span className="marquee-text" >
      15/10/2023: KOP Utilization Rate:70%  <span style={{ color: 'yellow' }}>CPO:1500MT</span>  <span style={{ color: 'yellow' }}>CPKO:1500MT </span>
      <span style={{ color: 'orange' }}>Cost/MT:36.4 </span>  L1500:Run CPO  L1000: Plant Stop 
    </span>
  );
};

export default MarqueeCard;
