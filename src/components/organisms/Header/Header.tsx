import React from 'react';

import { Navigation } from 'components/organisms/Navigation';

import { HeaderProps } from './Header.types';

import S from './Header.style';

const Header: React.FC<HeaderProps> = () => (
  <S.Header>
    Header
    <Navigation />
  </S.Header>
);

export default Header;
