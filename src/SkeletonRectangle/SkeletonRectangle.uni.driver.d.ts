import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface SkeletonRectangleUniDriver extends BaseUniDriver {
  getCountText(): Promise<string>;
  clickButtonTimes(times: number): Promise<void>;
  getButtonText(): Promise<string>;
}
