import React from 'react';
import { Card } from 'antd';
import './style.css'; // Import your CSS file

const MarqueeCard = () => {
  return (
    <span className="marquee-text" >
      15/10/2023: KOP Utilization Rate: 70% CPO: 1500MT CPKO: 1000MT Cost/MT : 36.4
    </span>
  );
};

export default MarqueeCard;
