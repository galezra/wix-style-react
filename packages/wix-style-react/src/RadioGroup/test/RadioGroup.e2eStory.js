import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from '../docs/storySettings';
import RadioGroupTest from '../docs/RadioGroupTest';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

storiesOf(kind, module)
  .add(testStories.basic, () => <RadioGroupTest />)
  .add(testStories.disabledRadio, () => (
    <RadioGroupTest defaultValue={1} disabledRadios={[4]} />
  ))
  .add(testStories.firstRadioSelected, () => (
    <RadioGroupTest defaultValue={1} />
  ));
