import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import Button from './Button';

afterEach(cleanup);

describe('Button', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Button onClick={() => {}} />;
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
