import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CarouselWIP from '../CarouselWIP';
import { carouselWIPPrivateDriverFactory } from './CarouselWIP.private.uni.driver';

describe(CarouselWIP.displayName, () => {
  const render = createRendererWithUniDriver(carouselWIPPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<CarouselWIP />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<CarouselWIP />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<CarouselWIP buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
