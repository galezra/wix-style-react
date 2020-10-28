import React from 'react';
import { storiesOf } from '@storybook/react';
import SkeletonGroup from '../SkeletonGroup';
import SkeletonRectangle from '../../SkeletonRectangle';
import SkeletonCircle from '../../SkeletonCircle';
import SkeletonLine from '../../SkeletonLine';
import Card from '../../Card';

const commonProps = {};

const tests = [
  {
    describe: 'Skin',
    its: [
      {
        it: 'Should be rendered with light skin',
        props: {
          ...commonProps,
          skin: 'light',
        },
      },
      {
        it: 'Should be rendered with dark skin',
        props: {
          ...commonProps,
          skin: 'dark',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${SkeletonGroup.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <SkeletonGroup {...commonProps} {...props}>
        <Card>
          <Card.Content>
            <SkeletonRectangle height="150px" width="100%" />
            <SkeletonCircle marginTop="SP3" margin="auto" diameter="30%" />
            <SkeletonLine marginTop="SP2" margin="auto" width="50%" />
          </Card.Content>
        </Card>
      </SkeletonGroup>
    ));
  });
});
