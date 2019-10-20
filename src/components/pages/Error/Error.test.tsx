import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import Error from './Error';

afterEach(cleanup);

describe('Error', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Error />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
