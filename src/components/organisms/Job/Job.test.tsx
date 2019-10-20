import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import theme from 'components/theme/light';

import Job from './Job';

afterEach(cleanup);

describe('Job', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = <Job client="Lorem ipsum" description="Lorem ipsum dolor sit amet" startdate="2019-10-18" endDate="2019-10-20" />;
      const { container } = renderComponent({ theme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
