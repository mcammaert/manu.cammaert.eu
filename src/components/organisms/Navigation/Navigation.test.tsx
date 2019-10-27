import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import Navigation from './Navigation';

afterEach(cleanup);

describe('Navigation', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = (
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
