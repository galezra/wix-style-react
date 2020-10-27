import React from 'react';
import { storiesOf } from '@storybook/react';
import SkeletonRectangle from '../SkeletonRectangle';

const commonProps = {};

const tests = [
  {
    describe: 'Sizing',
    its: [
      {
        it: 'Should be rendered with height',
        props: {
          ...commonProps,
          height: '80px',
        },
      },
      {
        it: 'Should be rendered with width',
        props: {
          ...commonProps,
          width: '100px',
        },
      },
    ],
  },
  {
    describe: 'Spacing',
    its: [
      {
        it: 'Should be rendered with margin',
        props: {
          ...commonProps,
          margin: '2px',
        },
      },
      {
        it: 'Should be rendered with margin left',
        props: {
          ...commonProps,
          marginLeft: '3px',
        },
      },
      {
        it: 'Should be rendered with margin right',
        props: {
          ...commonProps,
          marginRight: '3px',
        },
      },
      {
        it: 'Should be rendered with margin top',
        props: {
          ...commonProps,
          marginTop: '3px',
        },
      },
      {
        it: 'Should be rendered with margin bottom',
        props: {
          ...commonProps,
          marginBottom: '3px',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${SkeletonRectangle.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <SkeletonRectangle {...commonProps} {...props} />);
  });
});
