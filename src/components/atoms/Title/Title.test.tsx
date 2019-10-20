import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import Title from './Title';

afterEach(cleanup);

describe('Title', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Title>Lorem Ipsum</Title>;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
