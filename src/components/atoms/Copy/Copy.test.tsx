import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import Copy from './Copy';

afterEach(cleanup);

describe('Copy', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Copy>Lorem ipsum</Copy>;
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
