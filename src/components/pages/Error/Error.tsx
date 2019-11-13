import React from 'react';

import { Helmet } from 'react-helmet';

import { ErrorProps } from './Error.types';

import S from './Error.style';

const Error: React.FC<ErrorProps> = ({ message, title }) => (
  <S.Container>
    <Helmet>
      <title>Oeps | Manu Cammaert</title>
    </Helmet>
    <S.Error>
      <S.Title>{title || 'Fout'}</S.Title>
      <S.Message>{message || 'Er is een fout opgetreden'}</S.Message>
    </S.Error>
  </S.Container>
);

export default Error;
