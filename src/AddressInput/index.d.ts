import * as React from 'react';
import {
  DropdownLayoutOption,
  DropdownLayoutValueOption,
} from '../DropdownLayout';

export interface AddressInputProps {
  dataHook?: string;
  className?: string;
  clearButton?: boolean;
  initialValue?: string;
  value?: string;
  disabled?: boolean;
  onSelect?: (option: DropdownLayoutValueOption) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  options?: DropdownLayoutOption[];
  onClear?: () => void;
  status?: 'loading' | 'error' | 'warning';
  roundInput?: boolean;
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  noResultsText?: React.ReactNode;
}

export default class AddressInput extends React.PureComponent<
  AddressInputProps
> {}
