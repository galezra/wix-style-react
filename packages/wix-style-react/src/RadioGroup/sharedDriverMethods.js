import { radioButtonUniDriverFactory } from './RadioButton/RadioButton.uni.driver';
import { dataHooks } from './constants';

export const createRadioButtonsGetter = (base, body) => async () =>
  base
    .$$(`[data-hook="${dataHooks.RadioGroupRadioContainer}"]`)
    .map(radio =>
      Object.assign(radio, radioButtonUniDriverFactory(radio, body)),
    );
