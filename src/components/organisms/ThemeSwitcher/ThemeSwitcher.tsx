import React from 'react';

import { useCookies } from 'react-cookie';

import { ThemeSwitcherProps } from './ThemeSwitcher.types';

import S from './ThemeSwitcher.style';

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const [{ theme }, setCookies] = useCookies(['theme']);
  const darkModeSupport = window.matchMedia('(prefers-color-scheme)').media !== 'not all';

  const toggleLightThemeHandler = () => {
    setCookies('theme', 'light');
  };

  const toggleAutoThemeHandler = () => {
    setCookies('theme', 'auto');
  };

  const toggleDarkThemeHandler = () => {
    setCookies('theme', 'dark');
  };

  return (
    <S.ThemeSwitcher>
      <S.Label>Weergave</S.Label>
      <S.Buttons>
        <S.Button onClick={toggleLightThemeHandler} disabled={theme === 'light'}>
          Licht
        </S.Button>
        <S.Button onClick={toggleDarkThemeHandler} disabled={theme === 'dark'}>
          Donker
        </S.Button>
        {darkModeSupport && (
          <S.Button onClick={toggleAutoThemeHandler} disabled={theme === 'auto'}>
            Automatisch
          </S.Button>
        )}
      </S.Buttons>
    </S.ThemeSwitcher>
  );
};

export default ThemeSwitcher;
