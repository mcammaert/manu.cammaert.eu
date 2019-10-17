import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';

import Footer from './Footer';

afterEach(cleanup);

const theme = {
  colors: {},
};

describe('Footer', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Footer />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
