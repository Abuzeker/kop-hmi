import React from 'react';
import { Card } from 'antd';
import './style.css'; // Import your CSS file

const MarqueeCard = () => {
  return (
    <Card className="marquee-text">
      This is the content of the marquee card. It will scroll horizontally.
    </Card>
  );
};

export default MarqueeCard;
