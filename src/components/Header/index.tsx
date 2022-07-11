import { useState } from 'react';

import { BoldTypography, Container } from '../../utils/styles';

import LOGO from '../../assets/icons/logo_continental.svg';

import './index.css';

const Header: React.FC = () => {
  const [activeLang, setactiveLang] = useState('en');

  return (
    <Container className="header">
      <img src={LOGO} alt="" />
      <Container className="lang_btns">
        <BoldTypography className="lab_world">Lab World</BoldTypography>
        <button
          className={activeLang === 'en' ? 'active' : ''}
          type="button"
          onClick={() => setactiveLang('en')}
        >
          EN
        </button>
        <button
          className={activeLang === 'de' ? 'active' : ''}
          type="button"
          onClick={() => setactiveLang('de')}
        >
          DE
        </button>
      </Container>
    </Container>
  );
};

export default Header;
