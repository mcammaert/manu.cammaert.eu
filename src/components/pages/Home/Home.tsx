import React from 'react';

import { Default } from 'components/templates/Default';

import { HomeProps } from './Home.types';

import S from './Home.style';

const Home: React.FC<HomeProps> = () => (
  <S.Home>
    <Default>
      <p>Home</p>
    </Default>
  </S.Home>
);

export default Home;
