import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import { useDimensions } from '../../utils/use-dimensions';

import { MenuToggle } from './MenuToggle';
import Welcome from '../Home';

import './styles.css';
import { Container } from '../../utils/styles';

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MixingLab = ({ isOpen, toggleOpen }: Props) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      {isOpen && (
        <motion.div
          initial={{ y: '-1000' }}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ type: 'spring', duration: 0.5, delay: 0.2 }}
        >
          <Container className="mixing_lab">
            <h1 className="title">
              Welcome to
              <br />
              <span>Mixing Lab</span>
            </h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sit
              pellentesque et tellus. Condimentum duis sem volutpat, vitae.
              Interdum viverra eget pretium ullamcorper facilisis faucibus
              ornare sagittis. Adipiscing pharetra quis vitae vel. Aliquam id in
              nulla aliquet ipsum id. A ut fusce purus, egestas suscipit non
              laoreet. Molestie in faucibus turpis erat enim, auctor.
            </p>

            <button type="button" onClick={() => toggleOpen()}>
              Start mixing compounds
            </button>
          </Container>
        </motion.div>
      )}
      {!isOpen && <MenuToggle toggle={() => toggleOpen()} />}
    </motion.nav>
  );
};
