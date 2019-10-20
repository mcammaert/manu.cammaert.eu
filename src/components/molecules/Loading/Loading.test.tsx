import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import Loading from './Loading';

afterEach(cleanup);

describe('Loading', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Loading />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
