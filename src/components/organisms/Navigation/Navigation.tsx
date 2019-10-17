import React from 'react';

import { Link } from 'react-router-dom';

import { NavigationProps } from './Navigation.types';

import S from './Navigation.style';

const Navigation: React.FC<NavigationProps> = () => (
  <S.Navigation as="ul">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/cv">Curriculum Vitae</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </S.Navigation>
);

export default Navigation;
