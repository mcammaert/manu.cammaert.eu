import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import Table from './Table';

afterEach(cleanup);

describe('Table', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Table />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
