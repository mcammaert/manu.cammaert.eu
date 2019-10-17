import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';

import Resume from './Resume';

afterEach(cleanup);

const theme = {
  colors: {},
};

describe('Resume', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Resume />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
