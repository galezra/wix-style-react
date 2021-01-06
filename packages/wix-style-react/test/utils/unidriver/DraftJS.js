import ReactTestUtils from 'react-dom/test-utils';

/** Receives a unidriver of container that wraps a DraftJS input
 * and returns the input content element */
export const getContent = base => base.$('.public-DraftEditor-content');

/** Receives a unidriver of container (base) that wraps a DraftJS input,
 * and a `value` to add to the input
 * adds the value to the current input value */
export const enterRichTextValue = async (base, value) => {
  const contentElement = getContent(base);
  const nativeElement = await contentElement.getNative(); // eslint-disable-line no-restricted-properties
  if (contentElement.type === 'react') {
    ReactTestUtils.Simulate.beforeInput(nativeElement, { data: value });
  } else if (contentElement.type === 'protractor') {
    await nativeElement.sendKeys(value);
  } else if (contentElement.type === 'puppeteer') {
    await contentElement.enterValue(value, { shouldClear: false });
  } else {
    throw new Error('unsupported adapter');
  }
};
