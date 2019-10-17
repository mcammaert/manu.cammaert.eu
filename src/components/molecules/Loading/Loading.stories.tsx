import React from 'react';

import { storiesOf } from '@storybook/react';

import Loading from './Loading';

storiesOf('molecules/Loading', module).add('Loading', () => {
  return <Loading />;
});
