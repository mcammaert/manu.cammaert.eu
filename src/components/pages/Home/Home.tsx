import React from 'react';

import { Container } from 'components/atoms/Container';
import { Default } from 'components/templates/Default';

import { HomeProps } from './Home.types';

import S from './Home.style';

const Home: React.FC<HomeProps> = () => (
  <S.Home>
    <Default>
      <Container>
        <p>Home</p>
      </Container>
    </Default>
  </S.Home>
);

export default Home;
