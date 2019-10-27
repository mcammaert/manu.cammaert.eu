import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import Progress from './Progress';

afterEach(cleanup);

describe('Progress', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Progress progress={0.6} />;
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
