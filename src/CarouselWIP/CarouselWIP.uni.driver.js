import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const carouselWIPDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
