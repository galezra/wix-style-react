import { listItemEditableDriverFactory as publicDriverFactory } from '../ListItemEditable.uni.driver';

export const listItemEditablePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
