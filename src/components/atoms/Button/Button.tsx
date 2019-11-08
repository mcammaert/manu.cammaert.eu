import React from 'react';

import { ButtonProps } from './Button.types';

import S from './Button.style';

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false }) => (
  <S.Button onClick={onClick} disabled={disabled}>
    {children}
  </S.Button>
);

export default Button;
