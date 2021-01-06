import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '.';
import Button from '../Button';
import CloseButton from '../CloseButton';
import Text from '../Text';
import EmptyState from '../EmptyState';
import { Col, Container, Row } from '../Grid';

const tests = [
  {
    describe: 'subtitle',
    its: [
      {
        it: 'ellipsis with suffix',
        props: {
          suffix: (
            <Button
              onClick={() => alert('Clicked')}
              size="small"
              theme="fullblue"
            >
              Click
            </Button>
          ),
          subtitle: (
            <Text ellipsis>
              {' '}
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with
            </Text>
          ),
        },
      },
      {
        it: 'ellipsis without suffix',
        props: {
          subtitle: (
            <Text ellipsis>
              {' '}
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with
            </Text>
          ),
        },
      },
      {
        it: 'short',
        props: {
          suffix: (
            <Button
              onClick={() => alert('Clicked')}
              size="small"
              theme="fullblue"
            >
              Click
            </Button>
          ),
          subtitle: <Text>I am short subtitle</Text>,
        },
      },
    ],
  },
  {
    describe: 'controls',
    its: [
      {
        it: 'close button',
        props: {
          controls: <CloseButton />,
        },
      },
      {
        it: 'none',
        props: {
          controls: undefined,
        },
      },
    ],
  },
  {
    describe: 'card style',
    its: [
      {
        it: 'hideOverflow',
        props: {
          hideOverflow: true,
        },
      },
      {
        it: 'stretchVertically',
        props: {
          stretchVertically: true,
        },
      },
      {
        it: 'showShadow',
        props: {
          showShadow: true,
        },
      },
    ],
  },
  {
    describe: 'content size',
    its: [
      {
        it: 'none',
        props: {
          contentSize: undefined,
        },
      },
      {
        it: 'medium',
        props: {
          contentSize: 'medium',
        },
      },
      {
        it: 'large',
        props: {
          contentSize: 'large',
        },
      },
    ],
  },
  {
    describe: 'content empty state',
    its: [
      {
        it: 'with empty state',
        props: {
          childrenContent: (
            <EmptyState
              title="You don't have any items yet"
              subtitle="Create your product item in an easy & fast way to display it on your site"
              theme="section"
            />
          ),
        },
      },
      {
        it: 'without empty state',
        props: {
          childrenContent: 'hello',
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it, props }) => {
      storiesOf(
        `${themeName ? `${themeName}|` : ''}Card${
          describe ? '/' + describe : ''
        }`,
        module,
      ).add(it, () =>
        testWithTheme(
          <div style={{ background: '#F0F4F7', padding: 30 }}>
            <Container>
              <Row>
                <Col span={6}>
                  <Card
                    controls={props.controls}
                    hideOverflow={props.hideOverflow}
                    stretchVertically={props.stretchVertically}
                    showShadow={props.showShadow}
                  >
                    <Card.Header
                      title="Card header"
                      subtitle={props.subtitle}
                      suffix={props.suffix}
                    />
                    <Card.Divider />
                    <Card.Content size={props.contentSize}>
                      {props.childrenContent ? props.childrenContent : 'sdf'}
                    </Card.Content>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>,
        ),
      );
    });
  });
};
