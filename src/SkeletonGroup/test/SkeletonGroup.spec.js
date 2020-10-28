import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SkeletonGroup from '../SkeletonGroup';
import { skeletonGroupPrivateDriverFactory } from './SkeletonGroup.private.uni.driver';

import SkeletonRectangle from '../../SkeletonRectangle';
import SkeletonLine from '../../SkeletonLine';
import SkeletonCircle from '../../SkeletonCircle';
import { DEFAULT_SKIN } from '../constants';

const TestSkeleton = ({ skin }) => (
  <SkeletonGroup skin={skin}>
    <SkeletonRectangle />
    <SkeletonLine />
    <SkeletonCircle />
  </SkeletonGroup>
);

describe(SkeletonGroup.displayName, () => {
  const render = createRendererWithUniDriver(skeletonGroupPrivateDriverFactory);

  afterEach(cleanup);

  it('should render group with default children', async () => {
    const { driver } = render(<TestSkeleton />);

    expect(await driver.exists()).toBe(true);
  });

  it('should render group with default skin', async () => {
    const { driver } = render(<TestSkeleton />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.hasChildernSkin(DEFAULT_SKIN)).toBe(true);
  });

  it('should render group with custom skin', async () => {
    const { driver } = render(<TestSkeleton skin="dark" />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.hasChildernSkin('dark')).toBe(true);
  });
});
