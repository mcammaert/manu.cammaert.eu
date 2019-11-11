import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import Resume from './Resume';

afterEach(cleanup);

describe('Resume', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = (
        <Resume
          jobs={[]}
          personal={{
            name: 'name',
            nationality: 'nationality',
            birthDate: '2000-01-01',
            address: 'address',
            email: 'email',
            phone: '+32 485 00 00 00',
          }}
          skills={[]}
          technical={[]}
          software={[]}
          education={[]}
          training={[]}
          languages={[]}
          hobbies={[]}
        />
      );
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
