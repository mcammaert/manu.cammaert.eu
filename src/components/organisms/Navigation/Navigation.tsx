import React, { useState, MouseEvent } from 'react';

import { useLockBodyScroll } from 'react-use';
import { useTransition, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';

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

  const clickLinkHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    setShowNavigation(false);
    // event.preventDefault();
    // debugger;
    // console.log(event.currentTarget);
    // // history.push(event.currentTarget.attributes.href.value);
  };

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
                    <S.MenuItem>
                      <S.Link to="/" onClick={clickLinkHandler}>
                        Home
                      </S.Link>
                    </S.MenuItem>
                    <S.MenuItem>
                      <S.Link to="/cv?blablabla" onClick={clickLinkHandler}>
                        Curriculum Vitae
                      </S.Link>
                    </S.MenuItem>
                    <S.MenuItem>
                      <S.Link to="/contact" onClick={clickLinkHandler}>
                        Contact
                      </S.Link>
                    </S.MenuItem>
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
