import React from 'react';
import { storiesOf } from '@storybook/react';

import ListOfCards from '../docs/examples/ListOfCards';
import MainAndSide from '../docs/examples/MainAndSide';
import Form from '../docs/examples/Form';
import HolyGrail from '../docs/examples/HolyGrail';

[
  ['ListOfCards', ListOfCards],
  ['MainAndSide', MainAndSide],
  ['Form', Form],
  ['HolyGrail', HolyGrail],
].map(([name, Component]) =>
  storiesOf('Layout', module).add(name, () => <Component />),
);
