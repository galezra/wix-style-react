import { radioGroupUniDriverFactory as publicDriverFactory } from '../RadioGroup.uni.driver';
import { createRadioButtonsGetter } from '../sharedDriverMethods';

export const radioGroupPrivateDriverFactory = (base, body) => {
  const getRadioButtons = createRadioButtonsGetter(base, body);

  const getLabelElements = async () => {
    const allLabels = [];
    for (const radio of await getRadioButtons()) {
      allLabels.push(await radio.getLabelElement());
    }
    return allLabels;
  };

  return {
    ...publicDriverFactory(base, body),
    /** Get the class of the label element at the provided index */
    getClassOfLabelAt: async index =>
      (await getLabelElements())[index].classList,

    /** Checks if the display is set to vertical */
    isVerticalDisplay: async () =>
      (await base.attr('data-display')) === 'vertical',

    /** Checks if the display is set to horizontal */
    isHorizontalDisplay: async () =>
      (await base.attr('data-display')) === 'horizontal',

    /** Get the value of applied spacing between radios */
    spacing: async () => {
      const secondOption = (await getRadioButtons())[1];
      return (await secondOption._prop('style')).marginTop;
    },

    /** Get the value of applied line-height on the radio's labels */
    lineHeight: async () => (await getLabelElements())[0].style['line-height'],
  };
};
