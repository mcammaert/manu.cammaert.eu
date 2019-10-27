import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';
import { advanceTo, clear } from 'jest-date-mock';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import Home from './Home';

afterEach(cleanup);

describe('Home', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      advanceTo(new Date(2018, 5, 27, 8, 0, 0)); // reset to date time.

      const component = (
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();

      clear();
    });
  });
});
