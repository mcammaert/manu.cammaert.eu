import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderComponent = ({ theme, component }: any) => render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export default renderComponent;
