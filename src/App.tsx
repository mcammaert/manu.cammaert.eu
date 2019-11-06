import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useCookies } from 'react-cookie';
import { useMedia } from 'react-use';

import { lightTheme, darkTheme, GlobalStyle } from 'components/theme';

import { Router } from 'components/pages/Router';

const App: React.FC = () => {
  const [{ theme: savedTheme }, setCookies] = useCookies(['theme']);
  const [theme, setTheme] = useState('light');

  const darkModeSupport = window.matchMedia('(prefers-color-scheme)').media !== 'not all';
  const darkMode = useMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (!savedTheme) setCookies('theme', darkModeSupport ? 'auto' : 'light');
  }, [darkModeSupport, savedTheme, setCookies]);

  useEffect(() => {
    if (savedTheme === 'auto') {
      setTheme(darkMode ? 'dark' : 'light');
    } else {
      setTheme(savedTheme);
    }
  }, [darkMode, savedTheme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle light={theme !== 'dark'} />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
