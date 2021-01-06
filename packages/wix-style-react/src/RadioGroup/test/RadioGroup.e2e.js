import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { radioGroupTestkitFactory } from '../../../testkit/protractor';
import { eyesItInstance } from '../../../test/utils/eyes-it';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { flattenInternalDriver } from '../../../test/utils/private-drivers';
import { storySettings, testStories } from '../docs/storySettings';

const NUM_OF_BUTTONS_IN_EXAMPLE = 4;

const testStoryUrl = (testName, rtl) =>
  createTestStoryUrl({ ...storySettings, testName, rtl });

describe('RadioGroup', () => {
  const eyes = eyesItInstance();
  const radioGroupDriver = radioGroupTestkitFactory({
    dataHook: storySettings.dataHook,
  });
  const loadStory = async (testName, rtl) => {
    await browser.get(testStoryUrl(testName, rtl));
    await waitForVisibilityOf(
      radioGroupDriver.element(),
      'Cannot find RadioGroup',
    );
  };

  eyes.it('should select the second option in a group', async () => {
    await loadStory(testStories.basic);
    radioGroupDriver.selectByIndex(1).click();
    expect(radioGroupDriver.isRadioChecked(1)).toBe(true);
  });

  eyes.it('should not select disabled option', async () => {
    await loadStory(testStories.disabledRadio);
    expect(radioGroupDriver.isRadioDisabled(3)).toBe(true);
    browser.actions().mouseMove(radioGroupDriver.getRadioAtIndex(3)).click();
    expect(radioGroupDriver.isRadioChecked(3)).toBe(false);
  });

  describe('RTL', () => {
    beforeAll(async () => await loadStory(testStories.basic, true));

    eyes.it('should select the second option in a group', async () => {
      radioGroupDriver.selectByIndex(1).click();
      expect(radioGroupDriver.isRadioChecked(1)).toBe(true);
    });
  });
});
