import { skeletonCircleDriverFactory as publicDriverFactory } from '../SkeletonCircle.uni.driver';

export const skeletonCirclePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
