import { InputWithOptionsDriver } from '../InputWithOptions/InputWithOptions.driver';
import { OmitPolyfill } from '../common';

export interface MultiSelectCheckboxDriver
  extends OmitPolyfill<InputWithOptionsDriver, 'driver'> {
  driver: {
    getNumOfLabels: () => number;
    getLabels: () => string[];
    getLabelAt: (index: number) => string;
  } & Pick<InputWithOptionsDriver, 'driver'>;
}
