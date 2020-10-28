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

import SkeletonGroup from '..';
import Card from '../../Card';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SkeletonGroup,
  componentPath: '..',

  componentProps: {
    skin: 'light',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${SkeletonGroup.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Placeholder for filling up screen using skeleton items, usually for when some async operation is ongoing.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: `<div style={{width: "fit-content"}}>
            <Card>
                <Card.Content>
                  <SkeletonGroup skin="dark">
                    <div style={{display:'flex', flexDirection:'row'}}>
                      <SkeletonCircle diameter="30px" />
                      <div style={{display:'flex', flexDirection:'column'}}>
                      <SkeletonLine width="90px" marginLeft="10px" marginBottom="5px" />
                      <SkeletonRectangle width="60px" height="7px" marginLeft="10px" />
                      </div>
                      </div>
                      <SkeletonLine width="180px" marginBottom="5px" marginTop="10px" />
                      <SkeletonLine width="200px" marginBottom="5px" marginTop="10px" />
                      <SkeletonLine width="150px" marginBottom="5px" marginTop="10px" />
                      <SkeletonRectangle width="250px" height="150px" marginTop="20px" />
                  </SkeletonGroup>
                </Card.Content>
              </Card>
            </div>`,
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
