import React from 'react';
import { Container } from '../../utils/styles';

interface Props {
  toggle: () => void;
}

export const MenuToggle = ({ toggle }: Props) => (
  <button className="menu-toggle" onClick={toggle}>
    <Container className="circle" />
    <p>Mixing Lab</p>
  </button>
);
