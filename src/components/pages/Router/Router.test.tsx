import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import Router from './Router';

afterEach(cleanup);

describe('Router', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = (
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      );
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
