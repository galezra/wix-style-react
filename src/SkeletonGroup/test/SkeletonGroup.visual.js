import React from 'react';
import { storiesOf } from '@storybook/react';
import SkeletonGroup from '../SkeletonGroup';
import SkeletonRectangle from '../../SkeletonRectangle';
import Card from '../../Card';

const commonProps = {};

const tests = [
  {
    describe: 'Skin',
    its: [
      {
        it: 'Should be rendered with skin',
        props: {
          ...commonProps,
          skin: 'light',
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
            <SkeletonRectangle marginTop="SP3" margin="auto" width="30%" />
            <SkeletonRectangle marginTop="SP2" margin="auto" width="50%" />
            <SkeletonRectangle marginTop="SP1" margin="auto" width="50%" />
          </Card.Content>
        </Card>
      </SkeletonGroup>
    ));
  });
});
