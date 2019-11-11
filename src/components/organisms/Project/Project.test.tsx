import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';
import styled from 'styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import Project from './Project';

afterEach(cleanup);

describe('Project', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Project name="Lorem ipsum" />;
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });

  describe('all props', () => {
    it('should match the snapshot', () => {
      const component = (
        <Project
          name="Lorem ipsum"
          description="Lorem imsum dolor sit amet"
          technologies={['lorem', 'ipsum', 'dolor']}
          references={['lorem', 'ipsum', 'dolor']}
          roles={['lorem', 'ipsum', 'dolor']}
          headerLevel={3}
          visible
        />
      );
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });

  describe('visibility', () => {
    it('should match the snapshot', () => {
      const component = <Project name="Lorem ipsum" visible={false} />;
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
