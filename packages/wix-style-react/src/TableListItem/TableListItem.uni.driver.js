import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { checkboxUniDriverFactory } from '../Checkbox/Checkbox.uni.driver';

export const tableListItemDriverFactory = (base, body) => {
  const getColumnAt = index =>
    base.$$(`[data-hook="${dataHooks.tableListItemValue}"]`).get(index);
  const getCheckboxDriver = () =>
    checkboxUniDriverFactory(
      base.$(`[data-hook="${dataHooks.tableListItemCheckbox}"]`),
      body,
    );

  return {
    ...baseUniDriverFactory(base, body),
    getColumTextAt: async index => {
      const column = await getColumnAt(index);
      return column.text();
    },
    isCheckboxExists: () => {
      const driver = getCheckboxDriver();
      return driver.exists();
    },
    isCheckboxChecked: () => {
      const driver = getCheckboxDriver();
      return driver.isChecked();
    },
    toggleCheckbox: () => {
      const driver = getCheckboxDriver();
      driver.click();
    },
  };
};
