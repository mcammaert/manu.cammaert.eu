import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from 'components/theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
