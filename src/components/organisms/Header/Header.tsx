import React from 'react';

import { Container } from 'components/atoms/Container';
import { Navigation } from 'components/organisms/Navigation';

import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';
import { HeaderProps } from './Header.types';

import S from './Header.style';

const Header: React.FC<HeaderProps> = () => (
  <>
    <S.Header>
      <Container>
        <S.Title size={3} header={1}>
          <ScreenReaderOnly>Manu Cammaert</ScreenReaderOnly>
        </S.Title>
      </Container>
    </S.Header>
    <Navigation />
  </>
);

export default Header;
