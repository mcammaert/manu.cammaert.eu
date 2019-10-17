import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';
import styled from 'styled-components';

import { renderComponent } from 'testing/react-testing-library';

import COMPONENT_NAME from './COMPONENT_NAME';

afterEach(cleanup);

const theme = {
  colors: {},
};

describe('COMPONENT_NAME', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <COMPONENT_NAME />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
