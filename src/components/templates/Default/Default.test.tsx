import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';

import Default from './Default';

afterEach(cleanup);

const theme = {
  colors: {},
};

describe('Default', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Default />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
