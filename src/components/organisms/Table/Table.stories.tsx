import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Table from './Table';

storiesOf('Table', module).add('Table', () => {
  return <Table />;
});
