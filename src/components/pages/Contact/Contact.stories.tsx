import React from 'react';

import { storiesOf } from '@storybook/react';

import Contact from './Contact';

storiesOf('Contact', module).add('Contact', () => {
  return (
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
});
