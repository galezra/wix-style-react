import { carouselWIPDriverFactory as publicDriverFactory } from '../CarouselWIP.uni.driver';

export const carouselWIPPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
