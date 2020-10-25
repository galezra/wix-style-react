import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SkeletonGroup from '../SkeletonGroup';
import { skeletonGroupPrivateDriverFactory } from './SkeletonGroup.private.uni.driver';

describe(SkeletonGroup.displayName, () => {
  const render = createRendererWithUniDriver(skeletonGroupPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<SkeletonGroup />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<SkeletonGroup />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<SkeletonGroup buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
