import { isFocused } from 'wix-ui-test-utils/protractor';
import buttonDriverFactory from './RadioButton/RadioButton.protractor.driver';
import { dataHooks as RadioButtonDataHooks } from './RadioButton/constants';

const radioGroupDriverFactory = component => {
  const getRadioButtonLabel = index =>
    component
      .$$(`[data-hook="${RadioButtonDataHooks.RadioButtonLabel}"]`)
      .get(index);

  const getRadioButtonRoot = index =>
    component
      .$$(`[data-hook="${RadioButtonDataHooks.RadioButtonWrapper}"]`)
      .get(index);

  return {
    getButtonDriver: index => buttonDriverFactory(getRadioButtonRoot(index)),
    getRadioAtIndex: index => getRadioButtonLabel(index),
    selectByIndex: index => getRadioButtonLabel(index).click(),
    isRadioChecked: index =>
      component
        .$$(`[data-hook="${RadioButtonDataHooks.RadioButtonInput}"]`)
        .get(index)
        .isSelected(),
    isRadioDisabled: index =>
      !!component
        .$$(`[data-hook="${RadioButtonDataHooks.RadioButtonInput}"]`)
        .get(index)
        .getAttribute('disabled'),
    /**
     * @deprecated
     * @see getButtonDriver
     */
    isRadioFocused: index =>
      isFocused(
        component
          .$$(`[data-hook="${RadioButtonDataHooks.RadioButtonLabel}"]`)
          .get(index)
          .$(`[tabindex="0"]`),
      ),
    element: () => component,
  };
};

export default radioGroupDriverFactory;
