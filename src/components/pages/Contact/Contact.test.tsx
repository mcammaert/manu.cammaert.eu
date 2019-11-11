import React from 'react';

import { cleanup } from '@testing-library/react';
import 'jest-styled-components';

import { renderComponent } from 'testing/react-testing-library';
import { lightTheme } from 'components/theme';

import Contact from './Contact';

afterEach(cleanup);

describe('Contact', () => {
  describe('default props', () => {
    it('should match the snapshot', () => {
      const component = (
        <Contact
          personal={{
            name: 'name',
            nationality: 'nationality',
            birthDate: '2000-01-01',
            address: 'address',
            email: 'email',
            phone: '+32 485 00 00 00',
          }}
          links={[{ type: 'github', name: 'GitHub', uri: 'https://github.com/john_doe' }]}
        />
      );
      const { container } = renderComponent({ theme: lightTheme, component });
      expect(container).toMatchSnapshot();
    });
  });
});
