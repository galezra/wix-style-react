import { inputWithOptionsTestkitFactory } from '../../../testkit/protractor';
import { $, browser } from 'protractor';
import { isFocused, waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import {
  storySettings,
  insideFormStorySettings,
  testStories,
} from '../docs/storySettings';

describe('InputWithOptions', () => {
  let driver;

  const navigateToTestUrl = async ({
    testName,
    category,
    storyName,
    dataHook,
  }) => {
    const testStoryUrl = createTestStoryUrl({
      testName,
      category,
      storyName,
      dataHook,
    });
    await browser.get(testStoryUrl);
  };

  const runBeforeEach = (testName, settings) =>
    beforeEach(async () => {
      await navigateToTestUrl({ testName, ...settings });

      driver = inputWithOptionsTestkitFactory({
        dataHook: settings.dataHook,
      });
      await waitForVisibilityOf(
        driver.element(),
        `Cant find ${settings.dataHook}`,
      );
    });

  const pressTab = () =>
    browser.actions().sendKeys(protractor.Key.TAB).perform();

  async function focusOnInputWithOptions() {
    const firstElement = $(`[data-hook="input-for-focus-1"]`);

    await pressTab();
    expect(await isFocused(firstElement)).toEqual(true);

    await pressTab();
    expect(await driver.isFocused()).toEqual(true);
  }

  describe('Component', () => {
    runBeforeEach(testStories.tabsSwitches, storySettings);

    it('should move out focus of input if nothing is pressed / selected', async () => {
      await focusOnInputWithOptions();

      await pressTab();
      expect(await driver.isFocused()).toEqual(false);
    });

    it('should move out focus of input when have manual text option', async () => {
      await focusOnInputWithOptions();

      await driver.enterText('some option');
      await pressTab();
      expect(await driver.isFocused()).toEqual(false);
    });
  });

  describe('Wrapped with a form', () => {
    runBeforeEach(testStories.insideWrappingForm, insideFormStorySettings);

    it('should NOT submit the form on Enter key press', async () => {
      await driver.click();
      await driver.selectOptionAt(0);
      await driver.pressEnter();

      const wasFormSubmitted =
        $('[data-hook="was-submitted"]').getText() === 'yes';

      expect(wasFormSubmitted).toBe(false);
    });
  });
});
