import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export const renderComponent = ({ theme, component }: any) => render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export default renderComponent;