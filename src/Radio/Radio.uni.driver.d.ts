import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface RadioUniDriver extends BaseUniDriver {
  keyDown(key: string): Promise<void>;
  getValue(): Promise<string>;
  getName(): Promise<string>;
  iconExists(): Promise<boolean>;
  labelExists(): Promise<boolean>;
  isChecked(): Promise<boolean>;
  isDisabled(): Promise<boolean>;
}
