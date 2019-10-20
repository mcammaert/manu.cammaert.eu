import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import Progress from './Progress';

afterEach(cleanup);

describe('Progress', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Progress progress={0.6} />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
