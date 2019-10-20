import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';
import styled from 'styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import Project from './Project';

afterEach(cleanup);

describe('Project', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Project name="Lorem ipsum" />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
