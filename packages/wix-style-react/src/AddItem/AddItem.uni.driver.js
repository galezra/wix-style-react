import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { dataHooks } from './constants';

export const addItemUniDriverFactory = (base, body) => {
  const tooltipDriver = tooltipDriverFactory(
    findByHook(base, dataHooks.itemTooltip),
    body,
  );
  const textDriver = textUniDriverFactory(
    findByHook(base, dataHooks.itemText),
    body,
  );

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets AddItem text
     * @return {Promise<string>}
     */
    getText: () => textDriver.getText(),

    /**
     * Checks whether AddItem text exist
     * @returns {Promise<boolean>}
     */
    textExists: () => textDriver.exists(),

    /**
     * Gets tooltip text
     * @return {Promise<string>}
     */
    getTooltipContent: () => tooltipDriver.getTooltipText(),
  };
};
