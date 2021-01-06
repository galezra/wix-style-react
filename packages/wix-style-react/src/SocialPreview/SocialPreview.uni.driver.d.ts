import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface SocialPreviewUniDriver extends BaseUniDriver {
  getTitle: () => Promise<string>;
  getPreviewUrl: () => Promise<string>;
  getDescription: () => Promise<string>;
}
