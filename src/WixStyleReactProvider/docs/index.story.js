import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import * as examples from './examples';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import WixStyleReactProvider from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: WixStyleReactProvider,
  componentPath: '..',

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${WixStyleReactProvider.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              '`<WixStyleReactProvider/>` is a wrapper component that upgrades all its children to the features requested.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Heading Spacing',
            text:
              'Setting key `reducedSpacingAndImprovedLayout` to the `features` prop will turn on / off the layout spacing toggle feature.',
            source: examples.layoutSpacing,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
      ].map(tab),
    ]),
  ],
};
