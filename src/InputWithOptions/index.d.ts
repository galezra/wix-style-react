import * as React from 'react';
import {
  FocusOptionsPolyfill,
  OmitPolyfill,
  PopoverCommonProps,
} from '../common';
import {
  DropdownLayoutValueOption,
  DropdownLayoutProps,
} from '../DropdownLayout';
import { InputProps } from '../Input';

export interface InputWithOptionsProps<
  ManualInputFn = ManualInputFnSignature,
  OnSelectFn = OnSelectFnSignature
> extends InputProps,
    OmitPolyfill<DropdownLayoutProps, 'onSelect'> {
  autocomplete?: string;
  inputElement?: React.ReactElement;
  closeOnSelect?: boolean;
  onManuallyInput?: ManualInputFn;
  valueParser?: (
    option: DropdownLayoutValueOption,
  ) => DropdownLayoutValueOption['value'];
  dropdownWidth?: string;
  dropdownOffsetLeft?: string;
  showOptionsIfEmptyInput?: boolean;
  highlight?: boolean;
  native?: boolean;
  popoverProps?: PopoverCommonProps;
  onSelect?: OnSelectFn;
  onOptionsShow?: () => void;
  onOptionsHide?: () => void;
}

export default class InputWithOptions<
  ManualInputFn = ManualInputFnSignature,
  OnSelectFn = OnSelectFnSignature,
  T extends InputWithOptionsProps<
    ManualInputFn,
    OnSelectFn
  > = InputWithOptionsProps<ManualInputFn, OnSelectFn>
> extends React.Component<T> {
  focus: (options?: FocusOptionsPolyfill) => FocusOptionsPolyfill;
  blur: () => void;
  select: () => void;
}

export type ManualInputFnSignature = (
  inputValue: string,
  suggestedOption: DropdownLayoutValueOption,
) => void;

export type OnSelectFnSignature = DropdownLayoutProps['onSelect'];
