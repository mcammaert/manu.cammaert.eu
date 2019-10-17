import React from 'react';

import { storiesOf } from '@storybook/react';

import Default from './Default';

storiesOf('Default', module).add('Default', () => {
  return <Default />;
});
