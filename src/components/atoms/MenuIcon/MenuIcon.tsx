import React from 'react';

import { useSpring, animated } from 'react-spring';

import { MenuIconProps } from './MenuIcon.types';

import S, { Line } from './MenuIcon.style';

const AnimatedLine = animated(Line);

const MenuIcon: React.FC<MenuIconProps> = ({ className, checked }) => {
  const { number } = useSpring({ number: checked ? 18 : 1 });
  const { middleNumber } = useSpring({ middleNumber: checked ? 10 : 14 });

  return (
    <S.MenuIcon className={className} height="20" width="20">
      <AnimatedLine x1={number} y1="1" x2={number.interpolate(x => 20 - x)} y2={number} />
      <AnimatedLine x1={number.interpolate(x => x / 2)} y1="10" x2={middleNumber} y2="10" />
      <AnimatedLine x1={number} y1="19" x2={number.interpolate(x => 20 - x)} y2={number.interpolate(x => 20 - x)} />
    </S.MenuIcon>
  );
};

export default MenuIcon;
