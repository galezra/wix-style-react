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
import SkeletonCircle from '../../SkeletonCircle';
import SkeletonLine from '../../SkeletonLine';
import SkeletonRectangle from '../../SkeletonRectangle';

const example = config => baseExample({ components: allComponents, ...config });

const childrenProps = [
  <SkeletonCircle diameter="40px" />,
  <SkeletonLine width="50px" />,
  <SkeletonRectangle width="100px" height="60px" />,
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SkeletonGroup,
  componentPath: '..',

  componentProps: {
    skin: 'light',
    children: childrenProps,
  },

  exampleProps: {
    skin: ['light', 'dark'],
    children: childrenProps,
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

          importExample(
            `import { SkeletonGroup, SkeletonLine, SkeletonRectangle, SkeletonCircle } from 'wix-style-react'`,
          ),

          divider(),

          title('Examples'),

          example({
            title: 'Light skin',
            text: 'A simple example with light skin',
            source: `
<Card>
  <Card.Content>
    <SkeletonGroup skin="light">
      <Layout>
        <Cell>
          <Layout>
            <Cell span="1">
              <SkeletonCircle diameter="32px" />
            </Cell>
            <Cell span="3">
              <Box direction="vertical">
                <SkeletonLine marginBottom="5px" />
                <SkeletonLine marginBottom="5px" />
              </Box>
            </Cell>
            <Cell span="3">
              <Box direction="vertical">
                <SkeletonLine marginBottom="5px" />
                <SkeletonLine marginBottom="5px" />
              </Box>
            </Cell>
            <Cell span="5">
              <Box direction="vertical">
                <SkeletonLine marginBottom="5px" />
                <SkeletonLine marginBottom="5px" />
              </Box>
            </Cell>
          </Layout>
        </Cell>
        <Cell>
          <SkeletonRectangle height="150px" />
        </Cell>
      </Layout>
    </SkeletonGroup>
  </Card.Content>
</Card>
`,
          }),
          example({
            title: 'Dark skin',
            text: 'A simple example with dark skin',
            source: `
<SectionHelper appearance="experimentalDark">
    <SkeletonGroup skin="dark" backgroundColor="#162D3D">
      <Layout>
        <Cell>
          <Layout>
            <Cell span="1">
              <SkeletonCircle diameter="32px" />
            </Cell>
            <Cell span="3">
              <Box direction="vertical">
                <SkeletonLine marginBottom="5px" />
                <SkeletonLine marginBottom="5px" />
              </Box>
            </Cell>
            <Cell span="3">
              <Box direction="vertical">
                <SkeletonLine marginBottom="5px" />
                <SkeletonLine marginBottom="5px" />
              </Box>
            </Cell>
            <Cell span="5">
              <Box direction="vertical">
                <SkeletonLine marginBottom="5px" />
                <SkeletonLine marginBottom="5px" />
              </Box>
            </Cell>
          </Layout>
        </Cell>
        <Cell>
          <SkeletonRectangle height="150px" />
        </Cell>
      </Layout>
    </SkeletonGroup>
</SectionHelper>
`,
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
