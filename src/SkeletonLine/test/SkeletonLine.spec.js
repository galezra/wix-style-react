import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SkeletonLine from '../SkeletonLine';
import { skeletonLinePrivateDriverFactory } from './SkeletonLine.private.uni.driver';

describe(SkeletonLine.displayName, () => {
  const render = createRendererWithUniDriver(skeletonLinePrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<SkeletonLine />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<SkeletonLine />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<SkeletonLine buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
