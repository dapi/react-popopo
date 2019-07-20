import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  PopoverWrapper,
  Popover,
} from '../src/index.js';

storiesOf('Positioning', module).
  add('Positioning', () => <App position='top'/>);
