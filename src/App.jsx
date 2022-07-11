import React from 'react';
import { RecoilRoot } from 'recoil';
import { useCycle } from 'framer-motion';

import Header from './components/Header';
import Home from './components/Home';
import RainingCircles from './components/RainingCircles';

import { Container } from './utils/styles';
import { MixingLab } from './components/MixingLab';

const App = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Container>
      <Container className="yellow-bg" />
      <Header />
      {!isOpen && <Home />}
      <RecoilRoot>
        <RainingCircles />
      </RecoilRoot>
      <MixingLab isOpen={isOpen} toggleOpen={toggleOpen} />
    </Container>
  );
};

export default App;
