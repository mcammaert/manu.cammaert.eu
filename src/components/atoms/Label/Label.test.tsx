import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import Label from './Label';

afterEach(cleanup);

describe('Label', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Label>Lorem imsum</Label>;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
