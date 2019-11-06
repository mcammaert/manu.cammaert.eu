import React from 'react';

import { NavigationItemProps } from './NavigationItem.types';

import S from './NavigationItem.style';

const NavigationItem: React.FC<NavigationItemProps> = ({ className, onClick, disabled = false, children, type }) => (
  <S.NavigationItem className={className} onClick={onClick} disabled={disabled} type={type}>
    {children}
  </S.NavigationItem>
);

export default NavigationItem;
