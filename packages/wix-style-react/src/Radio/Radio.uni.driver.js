import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { radioButtonUniDriverFactory } from 'wix-ui-core/dist/src/components/radio-button/RadioButton.uni.driver';

export const radioDriverFactory = (base, body) => {
  const coreRadioDriver = radioButtonUniDriverFactory(base, body);

  return {
    ...baseUniDriverFactory(base, body),

    /**
    /* Triggers a keyDown event on the radio input 
     * @param {string} key
     * @return {Promise<void>}
     */
    keyDown: key => coreRadioDriver.keyDown(key),

    /**
     * Gets value of radio input
     * @return {Promise<string>}
     */
    getValue: () => coreRadioDriver.value(),

    /**
     * Gets name of radio input
     * @return {Promise<string>}
     */
    getName: () => coreRadioDriver.getName(),

    /**
     * Checks if icon of radio exists
     * @return {Promise<boolean>}
     */
    iconExists: () => coreRadioDriver.iconExists(),

    /**
     * Checks if label of radio exists
     * @return {Promise<boolean>}
     */
    labelExists: () => coreRadioDriver.labelExists(),

    /**
     * Checks if radio is checked
     * @return {Promise<boolean>}
     */
    isChecked: () => coreRadioDriver.isChecked(),

    /**
     * Checks if radio is disabled
     * @return {Promise<boolean>}
     */
    isDisabled: () => coreRadioDriver.isDisabled(),
  };
};
