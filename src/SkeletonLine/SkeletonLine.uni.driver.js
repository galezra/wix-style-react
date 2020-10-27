import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const skeletonLineDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the current count
     * @returns {Promise<string>}
     */
    getCountText: () => findByHook(base, dataHooks.skeletonLineCount).text(),

    /**
     * Clicks the button
     * @param {number} times Times to click
     * @returns {Promise<void>}
     */
    clickButtonTimes: async times => {
      const buttonElement = findByHook(base, dataHooks.skeletonLineButton);
      for (let i = 0; i < times; i++) {
        await buttonElement.click();
      }
    },

    /**
     * Gets the button text
     * @returns {Promise<string>}
     */
    getButtonText: () => findByHook(base, dataHooks.skeletonLineButton).text(),
  };
};
