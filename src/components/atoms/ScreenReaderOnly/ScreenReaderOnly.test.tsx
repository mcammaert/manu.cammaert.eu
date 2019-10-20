import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import ScreenReaderOnly from './ScreenReaderOnly';

afterEach(cleanup);

describe('ScreenReaderOnly', () => {
  describe('Paragraph element', () => {
    it('should match the snapshot', () => {
      const component = (
        <ScreenReaderOnly>
          <p>Lorem ipsum</p>
        </ScreenReaderOnly>
      );
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
  describe('Text', () => {
    it('should match the snapshot', () => {
      const component = <ScreenReaderOnly>Lorem ipsum</ScreenReaderOnly>;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
