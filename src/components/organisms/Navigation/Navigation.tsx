import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { ScreenReaderOnly } from 'components/atoms/ScreenReaderOnly';
import { NavigationProps } from './Navigation.types';

import S from './Navigation.style';

const Navigation: React.FC<NavigationProps> = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const onToggleNavigationHandler = () => {
    setShowNavigation(!showNavigation);
  };

  const transitions = useTransition(showNavigation, null, {
    from: { position: 'absolute', opacity: 0, zIndex: 999, left: 0, top: 0, width: '100vw', height: '100vh' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/cv">Curriculum Vitae</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </S.Navigation>
              </animated.div>
            ),
        )}
      </>
    </S.NavigationContainer>
  );
};

export default Navigation;
