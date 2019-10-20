import React from 'react';

import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import ScreenReaderOnly from './ScreenReaderOnly';

storiesOf('ScreenReaderOnly', module).add('ScreenReaderOnly', () => {
  return (
    <ScreenReaderOnly>
      <p>Lorem ipsum</p>
    </ScreenReaderOnly>
  );
});
