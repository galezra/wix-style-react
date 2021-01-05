import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import PulseAnimation from '../PulseAnimation';
import { pulseAnimationPrivateDriverFactory } from './PulseAnimation.private.uni.driver';

describe(PulseAnimation.displayName, () => {
  const render = createRendererWithUniDriver(
    pulseAnimationPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<PulseAnimation />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<PulseAnimation />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<PulseAnimation buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
