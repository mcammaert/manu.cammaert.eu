import React, { useState, useRef } from 'react';

import { useLockBodyScroll } from 'react-use';
import { interpolate, useTransition, animated, useTrail, ReactSpringHook, useChain, config } from 'react-spring';

import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';
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

  useLockBodyScroll(showNavigation);

  const basicRef = {
    start: () => {},
    stop: () => {},
  };

  const transRef = useRef<ReactSpringHook>(basicRef);
  const transitions = useTransition(showNavigation, null, {
    from: { position: 'absolute', opacity: 0, zIndex: 999, left: 0, top: 0, width: '100vw', height: '100vh' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    ref: transRef,
    config: config.stiff,
  });

  const trailRef = useRef<ReactSpringHook>(basicRef);
  const trail = useTrail(links.length, {
    opacity: showNavigation ? 1 : 0,
    x: showNavigation ? 0 : 20,
    ref: trailRef,
    trail: 100 / links.length,
    config: config.stiff,
  });

  useChain(showNavigation ? [transRef, trailRef] : [trailRef, transRef], [0, showNavigation ? 0.1 : 0.9]);

  const clickLinkHandler = () => {
    setShowNavigation(false);
  };

  const MenuItem = ({ title, uri }: { title: string; uri: string }) => (
    <S.MenuItem>
      <S.Link to={uri} onClick={clickLinkHandler}>
        {title}
      </S.Link>
    </S.MenuItem>
  );

  return (
    <S.NavigationContainer>
      <S.ToggleButton onClick={onToggleNavigationHandler}>
        <S.MenuIcon checked={showNavigation} />
        <ScreenReaderOnly>{showNavigation ? 'Verberg navigatie' : 'Toon navigatie'}</ScreenReaderOnly>
      </S.ToggleButton>
      <>
        {transitions.map(
          ({ item, props, key }) =>
            item && (
              <animated.div key={key} style={props}>
                <S.Navigation>
                  <S.Menu>
                    {trail.map(({ x, ...rest }, index) => {
                      const { uri, title } = links[index];
                      return (
                        <animated.div
                          key={uri}
                          style={{ ...rest, transform: interpolate([x], (value: number) => `translate3d(0,${value}px,0)`) }}
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...rest}>
                          <MenuItem uri={uri} title={title} />
                        </animated.div>
                      );
                    })}
                  </S.Menu>
                </S.Navigation>
              </animated.div>
            ),
        )}
      </>
    </S.NavigationContainer>
  );
};

export default Navigation;
