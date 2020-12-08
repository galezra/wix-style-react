import addItemDriverFactory from '../AddItem.driver';
import { tooltipTestkitFactory } from 'wix-ui-core/dist/src/testkit';
import { dataHooks } from '../constants';

export const addItemPrivateDriverFactory = ({
  element,
  eventTrigger,
  muteWarning,
}) => {
  const tooltipTestkit = tooltipTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.itemTooltip,
  });
  return {
    ...addItemDriverFactory({ element, eventTrigger, muteWarning }),
    tooltipElementExists: () => tooltipTestkit.exists(),
    getTooltipText: () => {
      tooltipTestkit.mouseEnter();
      const text = tooltipTestkit.getContentElement();
      tooltipTestkit.mouseLeave();
      return text;
    },
  };
};
