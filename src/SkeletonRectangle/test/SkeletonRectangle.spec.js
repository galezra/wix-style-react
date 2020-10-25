import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SkeletonRectangle from '../SkeletonRectangle';
import { skeletonRectanglePrivateDriverFactory } from './SkeletonRectangle.private.uni.driver';

describe(SkeletonRectangle.displayName, () => {
  const render = createRendererWithUniDriver(
    skeletonRectanglePrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<SkeletonRectangle />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<SkeletonRectangle />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<SkeletonRectangle buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
