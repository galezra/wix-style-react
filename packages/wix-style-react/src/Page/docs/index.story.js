import React from 'react';

import {
  api,
  tabs,
  tab,
  playground,
  testkit,
  title,
  code as baseCode,
  description,
  importExample,
  header,
  divider,
  example as baseExample,
} from 'wix-storybook-utils/Sections';

import Page from '..';

import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';

import {
  header as headerExample,
  tail as tailExample,
  fixedContent as fixedContentExample,
  content as contentExample,
} from './PageChildren';
import './PageStory.scss';

import ChildrenReadme from './Children.md';

import ExampleStickyTableWithGapRaw from '!raw-loader!./ExampleStickyTableWithGap';
import ExampleVerticalScrollListenersRaw from '!raw-loader!./ExampleVerticalScrollListeners';
import * as examples from './examples';

const code = config =>
  baseCode({
    components: allComponents,
    compact: false,
    ...config,
  });

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  name: 'Page',
  component: Page,
  componentWrapper: ({ component }) => (
    <div style={{ position: 'relative' }}>{component}</div>
  ),
  componentPath: '../Page.js',

  componentProps: {
    children: [headerExample(), tailExample, contentExample(false)],
    gradientClassName: 'background-gradient',
  },

  exampleProps: {
    children: [
      {
        label: 'header, tailExample & content',
        value: [headerExample(), tailExample, contentExample()],
      },
      {
        label: 'header & content',
        value: [headerExample(), contentExample()],
      },
      {
        label: 'just content',
        value: [contentExample()],
      },
      {
        label: 'header, tailExample, fixed-content & content',
        value: [
          headerExample(),
          tailExample,
          fixedContentExample,
          contentExample(),
        ],
      },
    ],
    backgroundImageUrl: [
      {
        label: 'https://some-host.com/image-path.jpg',
        value:
          'https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg',
      },
    ],
  },

  sections: [
    header({}),
    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            description:
              'The Page component provides a common layout for a page header and content, including scrolling capabilities, sticky nodes and much more',
          }),

          importExample(`import { Page } from 'wix-style-react';`),

          divider(),

          title('Basic Examples'),
          ...[
            {
              title: 'Basic',
              description:
                'Simply compound a <Page/> with <Page.Header/> and <Page.Content/>',
              source: `
                <Page>
                  <Page.Header title="Page Header"/>
                  <Page.Content>
                    Page Content
                  </Page.Content>
                </Page>
                `,
              compact: false,
            },
            {
              title: 'Stretch to full size',
              description:
                'A Page stretches according to its container height. use `100vh` for a standalone page or `calc(100vh - 48px)` if top bar exists',
              source: `
                <Page height="40vh">
                  <Page.Header title="Page Header"/>
                  <Page.Content>
                    Page Content
                  </Page.Content>
                </Page>
                `,
              compact: false,
            },
            {
              title: 'Page containing a grid of cards',
              description:
                'A common use case will be a Page containing Card components arranged by Grid components',
              source: `
                <Page height="40vh">
                  <Page.Header title="Page Header"/>
                  <Page.Content>
                    <Container>
                      <Row>
                        <Col span={6}>
                          <Card>
                            <Card.Header title="Card"/>
                            <Card.Divider />
                            <Card.Content>
                              Some content
                            </Card.Content>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Page.Content>
                </Page>
                `,
              compact: true,
            },
            {
              title: 'A Powerful Page Header',
              description:
                'The `PageHeader` is a standalone component, checkout its docs to see all features',
              source: `
                <Page>
                  <Page.Header title="Page Header" showBackButton onBackClicked={() => alert('cool')} actionsBar={<Button>Click me</Button>}/>
                  <Page.Content>
                    Page Content
                  </Page.Content>
                </Page>
                `,
              compact: true,
            },
          ].map(code),

          divider(),

          title('Page Layout Features'),
          ...[
            {
              title: 'Minimized header',
              description:
                'The Page will automatically adjust its header to a minimized mode when scrolling through the content',
              source: `
                <Page height="40vh">
                  <Page.Header title="Page Header" />
                  <Page.Content>
                    <Container>
                      <Row>
                        <Col span={8}>
                          <Card>
                            <Card.Content>
                              <h3>Scroll Down</h3>
                              {Array(20).fill(' ').map((item, i) =>
                                (<div key={"minimized-header-example-item-"+ i}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                  facilisis molestie magna vitae pellentesque. Ut elementum
                                  accumsan nibh, ut faucibus velit. Vestibulum at mollis justo.
                                </div>)
                                )
                              }
                            </Card.Content>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Page.Content>
                </Page>
              `,
              compact: true,
            },
            {
              title: 'Horizontal Scroll',
              description: 'Allows for horizontal scrolling without set width',
              source: `
                <Page height="40vh" horizontalScroll>
                  <Page.Header title="Page Header" actionsBar={<Button>Click me</Button>}/>
                  <Page.Content>
                    <Box directon="horizontal">
                      {
                        Array.from(Array(7)).map((_, idx) =>
                          <Box key={idx} backgroundColor="lightyellow" marginRight="12px" padding="12px" minWidth="200px" height="1000px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </Box>
                        )
                      }
                    </Box>
                  </Page.Content>
                </Page>
              `,
              compact: true,
            },
            {
              title: 'Vertical Scroll',
              description:
                'Provides easy registration to vertical scroll listeners on the scrollable content, all scroll events are throttled internally (100ms)',
              source: ExampleVerticalScrollListenersRaw,
              autoRender: false,
              compact: true,
            },
            {
              title: 'Header Tail elements',
              description:
                'elements can be sticked to the header when scrolled. Tabs are a good example for usage.',
              source: `
                <Page height="40vh">
                  <Page.Header title="Page Header" />
                  <Page.Tail>
                    <Tabs
                      activeId={1}
                      hasDivider={false}
                      items={[{id: 1, title: 'item 1'}, {id: 2, title: 'item 2'}]}
                    />
                  </Page.Tail>
                  <Page.Content>
                    <Container>
                      <Row>
                        <Col span={8}>
                          <Card>
                            <Card.Content>
                              {Array(20).fill(' ').map((item,i) =>
                                (<div key={"header-tail-elements-example-item-"+ i}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                  facilisis molestie magna vitae pellentesque. Ut elementum
                                  accumsan nibh, ut faucibus velit. Vestibulum at mollis justo.
                                </div>)
                                )
                              }
                            </Card.Content>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Page.Content>
                </Page>
              `,
              compact: true,
            },
            {
              title: 'Sticky elements',
              description:
                'The Page provides <Page.Sticky/> container to attach elements to the scrolled container.',
              source: `
                <Page height="40vh">
                  <Page.Header title="Page Header" />
                  <Page.Content>
                    <Container>
                      <Row stretchViewsVertically>
                        <Col span={8}>
                          <Card>
                            <Card.Content>
                              {Array(20).fill(' ').map((item,i) =>
                                (<div key={"sticky-elements-example-item-"+i}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                  facilisis molestie magna vitae pellentesque. Ut elementum
                                  accumsan nibh, ut faucibus velit. Vestibulum at mollis justo.
                                </div>)
                                )
                              }
                            </Card.Content>
                          </Card>
                        </Col>
                        <Col span={4}>
                          <Page.Sticky>
                            <Card>
                              <Card.Header title="Sticky" />
                              <Card.Divider />
                              <Card.Content>Some menu or other content</Card.Content>
                            </Card>
                          </Page.Sticky>
                        </Col>
                      </Row>
                    </Container>
                  </Page.Content>
                </Page>
              `,
              compact: true,
            },
            {
              title: 'Complex structures',
              description: `With Page component you can achieve rich experiences, for example wrapping Table components`,
              source: ExampleStickyTableWithGapRaw,
              autoRender: false,
              compact: true,
            },
          ].map(code),

          example({
            title: 'Full page - non scrollable',
            text:
              'A full view of a non scrollable page with a header and a footer.',
            source: examples.fullNotScrollableContent,
          }),

          example({
            title: 'Full page - scrollable',
            text: `
A full view of a scrollable page with a header and a footer.\n
This example also demonstrate the \`scrollTo\` functionality.
            `,
            source: examples.fullScrollableContent,
          }),
        ],
      }),
      ...[
        {
          title: 'API',
          sections: [
            description({
              title:
                'Please refer the "Compound Components API" for <Page.XXX/> related API',
            }),
            api(),
          ],
        },
        {
          title: 'Compound Components API',
          sections: [description({ title: 'Children', text: ChildrenReadme })],
        },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
