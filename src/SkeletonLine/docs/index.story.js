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
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import SkeletonLine from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SkeletonLine,
  componentPath: '..',

  componentProps: {},

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${SkeletonLine.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Customze placeholder for filling up screen on line shape, usually for when some async operation is ongoing.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Sizes',
            text: 'A simple example with compact preview',
            source: '<SkeletonLine width="80%" margin="auto" />',
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
