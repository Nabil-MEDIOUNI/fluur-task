import React from 'react';

import { Container } from '../../utils/styles';

import './index.css';

const Home: React.FC = () => {
  return (
    <Container className="home">
      <h1 className="title">
        Explore <br />
        <span>Continental’s lab</span>
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus euismod
        duis vitae gravida. Sit tincidunt consequat, nullam.
      </p>
    </Container>
  );
};

export default Home;
