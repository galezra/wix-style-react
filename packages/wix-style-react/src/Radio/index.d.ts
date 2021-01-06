import * as React from 'react';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/dist/src/components/radio-button';

export type RadioAlignItems = 'top' | 'center';

export interface RadioProps {
  dataHook?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  id?: string;
  name?: React.ReactNode;
  onChange?(event: RadioButtonChangeEvent | RadioButtonClickEvent): void;
  alignItems?: RadioAlignItems;
}

declare const Radio: React.FunctionComponent<RadioProps>;
export default Radio;
