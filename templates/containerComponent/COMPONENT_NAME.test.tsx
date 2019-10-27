import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';
import styled from 'styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import COMPONENT_NAME from './COMPONENT_NAME';

afterEach(cleanup);

describe('COMPONENT_NAME', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <COMPONENT_NAME />;
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
