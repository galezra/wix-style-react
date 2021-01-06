import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { ReactBase } from '../../test/utils/unidriver';

export const tabsUniDriverFactory = base => {
  const findFirst = async query => {
    const item = base.$$(query).get(0);
    return (await item.exists()) ? item : null;
  };
  const getItemsContainer = async () => findFirst('ul');
  const getItems = async () =>
    ReactBase(await getItemsContainer())._DEPRECATED_children();

  const getItemsContainerType = async () => {
    const itemContainer = await getItemsContainer();
    return await itemContainer.attr('data-type');
  };

  return {
    ...baseUniDriverFactory(base),
    getTitles: async () =>
      Promise.all((await getItems()).map(item => item.text())),
    clickTabAt: async index => (await getItems())[index].click(),
    getActiveTabIndex: async () => {
      const itemsDataActivePromises = (await getItems()).map(item =>
        item.attr('data-active'),
      );
      const itemsDataActive = await Promise.all(itemsDataActivePromises);
      return itemsDataActive.findIndex(active => active === 'true');
    },
    isDefaultType: async () => !(await getItemsContainerType()),
    getItemsContainerType,
    getDataHook: async index => (await getItems())[index].attr('data-hook'),
    getItemsWidth: async () => {
      const items = await getItems();
      const itemsWidthArrayPromise = items.map(item =>
        item._prop('style').then(style => style.width),
      );
      const itemsWidthArray = await Promise.all(itemsWidthArrayPromise);
      return new Set(itemsWidthArray);
    },
    hasDivider: async () => (await base.attr('data-divider')) === 'true',
    getSideContent: async () => findFirst(`[data-content="true"]`),
    getItemsMaxWidths: async () =>
      Promise.all(
        (await getItems()).map(item =>
          item._prop('style').then(style => style),
        ),
      ),
  };
};
