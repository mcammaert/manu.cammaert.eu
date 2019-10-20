import React from 'react';

import { TitleProps } from './Title.types';

import S from './Title.style';

const Title: React.FC<TitleProps> = ({ children, className }) => <S.Title className={className}>{children}</S.Title>;

export default Title;
