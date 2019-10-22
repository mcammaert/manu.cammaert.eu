import React from 'react';

import { Container } from 'components/atoms/Container';
import { Navigation } from 'components/organisms/Navigation';

import { HeaderProps } from './Header.types';

import S from './Header.style';

const Header: React.FC<HeaderProps> = () => (
  <S.Header>
    <Container>
      <S.Title size={3} header={1}>
        Manu Cammaert
      </S.Title>
      <Navigation />
    </Container>
  </S.Header>
);

export default Header;
