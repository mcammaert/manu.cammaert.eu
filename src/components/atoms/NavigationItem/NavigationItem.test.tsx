import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import NavigationItem from './NavigationItem';

afterEach(cleanup);

describe('NavigationItem', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <NavigationItem />;
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
