import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import MenuIcon from './MenuIcon';

afterEach(cleanup);

describe('MenuIcon', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <MenuIcon />;
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
