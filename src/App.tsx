import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useCookies } from 'react-cookie';

import { lightTheme, darkTheme } from 'components/theme';

import { Router } from 'components/pages/Router';

const App: React.FC = () => {
  const [{ theme }] = useCookies(['theme']);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
