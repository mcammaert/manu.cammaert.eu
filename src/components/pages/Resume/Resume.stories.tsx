import React from 'react';

import { storiesOf } from '@storybook/react';

import Resume from './Resume';

storiesOf('Resume', module).add('Resume', () => {
  return (
    <Resume
      jobs={[]}
      personal={{ name: 'name', nationality: 'nationality', birthDate: '2000-01-01', address: 'address', email: 'email' }}
      skills={[]}
      technical={[]}
      software={[]}
      education={[]}
      training={[]}
      languages={[]}
      hobbies={[]}
    />
  );
});
