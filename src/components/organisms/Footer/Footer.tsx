import React from 'react';

import moment from 'moment';

import { Container } from 'components/atoms/Container';

import { FooterProps } from './Footer.types';

import S from './Footer.style';

const Footer: React.FC<FooterProps> = () => (
  <S.Footer>
    <Container>
      <S.CopyrightNotice>Copyright &copy; {moment().format('YYYY')} Manu Cammaert, alle rechten voorbehouden.</S.CopyrightNotice>
    </Container>
  </S.Footer>
);

export default Footer;
