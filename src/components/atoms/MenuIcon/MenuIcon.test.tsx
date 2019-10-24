import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import MenuIcon from './MenuIcon';

afterEach(cleanup);

describe('MenuIcon', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <MenuIcon />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
