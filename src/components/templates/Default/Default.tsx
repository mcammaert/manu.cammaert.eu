import React from 'react';

import { Footer } from 'components/organisms/Footer';

import { DefaultProps } from './Default.types';

import S from './Default.style';

const Default: React.FC<DefaultProps> = ({ children }) => (
  <S.Default>
    {children}
    <Footer />
  </S.Default>
);

export default Default;
