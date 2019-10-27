import React, { useState, useRef } from 'react';

import { useLockBodyScroll, useWindowSize, useKey } from 'react-use';
import { useSpring, useTransition, ReactSpringHook, useChain, config } from 'react-spring';
import FocusLock from 'react-focus-lock';

import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';
import { Container } from 'components/atoms/Container';

import { NavigationProps } from './Navigation.types';

import S from './Navigation.style';

const links = [
  {
    title: 'Home',
    uri: '/',
  },
  {
    title: 'Curriculum Vitae',
    uri: '/cv',
  },
  {
    title: 'Contact',
    uri: '/contact',
  },
];

const Navigation: React.FC<NavigationProps> = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const onToggleNavigationHandler = () => {
    setShowNavigation(!showNavigation);
  };

  useKey('Escape', () => setShowNavigation(false));

  const { height } = useWindowSize();

  useLockBodyScroll(showNavigation);

  const basicRef = {
    start: () => {},
    stop: () => {},
  };

  const springRef = useRef<ReactSpringHook>(basicRef);
  const spring = useSpring({
    from: {
      opacity: 0,
      top: 0,
      right: 0,
      bottom: height,
      left: 0,
    },
    to: {
      opacity: showNavigation ? 1 : 0,
      top: 0,
      right: 0,
      bottom: showNavigation ? 0 : height,
      left: 0,
    },
    ref: springRef,
    config: config.stiff,
  });

  const menuItemsRef = useRef<ReactSpringHook>(basicRef);
  const menuItems = useTransition(showNavigation ? links : [], item => item.uri, {
    ref: menuItemsRef,
    config: config.stiff,
    trail: 400 / links.length,
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
  });

  useChain(showNavigation ? [springRef, menuItemsRef] : [menuItemsRef, springRef], showNavigation ? [0, 0.25] : [0, 0.45]);

  const clickLinkHandler = () => {
    setShowNavigation(false);
  };

  return (
    <S.NavigationContainer>
      <FocusLock disabled={!showNavigation}>
        <S.ToggleButton onClick={onToggleNavigationHandler}>
          <S.MenuIcon checked={showNavigation} />
          <ScreenReaderOnly>{showNavigation ? 'Verberg het menu' : 'Toon het menu'}</ScreenReaderOnly>
        </S.ToggleButton>
        <S.Navigation style={spring} aria-modal={showNavigation} role={showNavigation ? 'dialog' : ''}>
          <Container>
            <S.Menu>
              {menuItems.map(({ item, key, props }) => (
                <S.MenuItem key={key} style={props}>
                  <S.Link to={item.uri} onClick={clickLinkHandler}>
                    {item.title}
                  </S.Link>
                </S.MenuItem>
              ))}
            </S.Menu>
          </Container>
        </S.Navigation>
      </FocusLock>
    </S.NavigationContainer>
  );
};

export default Navigation;
