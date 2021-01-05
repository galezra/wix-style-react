import { baseUniDriverFactory } from '../Animate/Animate.uni.driver';

export const pulseAnimationDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
