import React, { useState, MouseEvent } from 'react';

import { useLockBodyScroll } from 'react-use';
import { interpolate, useTransition, animated, useTrail } from 'react-spring';

import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';
import { NavigationProps } from './Navigation.types';

import S from './Navigation.style';

const Navigation: React.FC<NavigationProps> = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const onToggleNavigationHandler = () => {
    setShowNavigation(!showNavigation);
  };

  useLockBodyScroll(showNavigation);

  const transitions = useTransition(showNavigation, null, {
    from: { position: 'absolute', opacity: 0, zIndex: 999, left: 0, top: 0, width: '100vw', height: '100vh' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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

  const trail = useTrail(links.length, {
    opacity: showNavigation ? 1 : 0,
    x: showNavigation ? 0 : 20,
  });

  const clickLinkHandler = () => {
    setShowNavigation(false);
  };

  const AnimatedMenuItem = animated(({ title, uri, ...rest }: { title: string; uri: string; style: any }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <S.MenuItem {...rest}>
      <S.Link to={uri} onClick={clickLinkHandler}>
        {title}
      </S.Link>
    </S.MenuItem>
  ));

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
                        <AnimatedMenuItem
                          key={uri}
                          uri={uri}
                          title={title}
                          style={{ ...rest, transform: interpolate([x], (value: number) => `translate3d(0,${value}px,0)`) }}
                        />
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
