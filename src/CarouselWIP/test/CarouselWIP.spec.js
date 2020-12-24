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
});
