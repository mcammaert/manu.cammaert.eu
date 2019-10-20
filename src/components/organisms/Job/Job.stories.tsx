import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Job from './Job';

storiesOf('organisms/Job', module).add('Job', () => {
  const client = text('client', 'lorem ipsum');
  const description = text('description', 'lorem ipsum dolor sit amet');
  const startDate = text('start date', '2019-10-18');
  const endDate = text('end date', '2019-10-20');
  return <Job client={client} description={description} startDate={startDate} endDate={endDate} />;
});
