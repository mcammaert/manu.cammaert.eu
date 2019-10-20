import React from 'react';

import { Navigation } from 'components/organisms/Navigation';

import { HeaderProps } from './Header.types';

import S from './Header.style';

const Header: React.FC<HeaderProps> = () => (
  <S.Header>
    <h1>Manu Cammaert</h1>
    <Navigation />
  </S.Header>
);

export default Header;
