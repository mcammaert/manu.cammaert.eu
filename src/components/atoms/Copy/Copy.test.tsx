import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import Copy from './Copy';

afterEach(cleanup);

describe('Copy', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Copy>Lorem ipsum</Copy>;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
