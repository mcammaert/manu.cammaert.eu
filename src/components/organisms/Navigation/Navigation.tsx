import React, { useState, useRef } from 'react';

import { useLockBodyScroll, useWindowSize, useKey } from 'react-use';
import { useSpring, useTransition, ReactSpringHook, useChain, config } from 'react-spring';
import FocusLock from 'react-focus-lock';

import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';
import { Container } from 'components/atoms/Container';
import { ThemeSwitcher } from 'components/organisms/ThemeSwitcher';

import { NavigationProps } from './Navigation.types';

import S from './Navigation.style';

type menuItems = Array<
  { type: 'link'; id: string; title: string; uri: string } | { type: 'component'; id: string; component: React.ReactElement }
>;

const items: menuItems = [
  {
    id: 'home',
    title: 'Home',
    uri: '/',
    type: 'link',
  },
  {
    id: 'cv',
    title: 'Curriculum Vitae',
    uri: '/cv',
    type: 'link',
  },
  {
    id: 'contact',
    title: 'Contact',
    uri: '/contact',
    type: 'link',
  },
  {
    id: 'themeSwitcher',
    component: <ThemeSwitcher />,
    type: 'component',
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

  const navigationRef = useRef<ReactSpringHook>(basicRef);
  const navigation = useSpring({
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
    ref: navigationRef,
    config: config.stiff,
  });

  const menuItemsRef = useRef<ReactSpringHook>(basicRef);
  const menuItems = useTransition(showNavigation ? items : [], item => item.id, {
    ref: menuItemsRef,
    config: config.stiff,
    trail: 400 / items.length,
    from: { opacity: 0, transform: 'translateY(-10px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
  });

  useChain(showNavigation ? [navigationRef, menuItemsRef] : [menuItemsRef, navigationRef], showNavigation ? [0, 0.25] : [0, 0.45]);

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
        <S.Navigation style={navigation} aria-modal={showNavigation} role={showNavigation ? 'dialog' : ''}>
          <Container>
            <S.Menu>
              {menuItems.map(({ item, key, props }) => (
                <S.MenuItem key={key} style={props}>
                  {item.type === 'link' && (
                    <S.Link to={item.uri} onClick={clickLinkHandler}>
                      {item.title}
                    </S.Link>
                  )}
                  {item.type === 'component' && item.component}
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
