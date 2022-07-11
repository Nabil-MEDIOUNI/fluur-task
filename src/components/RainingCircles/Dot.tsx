import React from 'react';

import { Container } from '../../utils/styles';

const Dot: React.FC = (props: any) => {
  const { color, x, y, size, index, onClick } = props;
  const dotStyle = {
    backgroundColor: color,
    height: `${size}px`,
    width: `${size}px`,
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <Container
      className="dot"
      style={dotStyle}
      onClick={() => onClick(index)}
    />
  );
};

export default Dot;
