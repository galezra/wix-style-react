import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SkeletonCircle from '../SkeletonCircle';
import { skeletonCirclePrivateDriverFactory } from './SkeletonCircle.private.uni.driver';

describe(SkeletonCircle.displayName, () => {
  const render = createRendererWithUniDriver(
    skeletonCirclePrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<SkeletonCircle />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<SkeletonCircle />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<SkeletonCircle buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
