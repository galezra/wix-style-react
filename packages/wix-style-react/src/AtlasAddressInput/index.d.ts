import * as React from 'react';
import { V2Place } from '@wix/ambassador-wix-atlas-service-web/http';
import { AddressInputProps } from '../AddressInput';
import { OmitPolyfill } from '../common';
import { DropdownLayoutValueOption } from '../DropdownLayout';
import { AtlasInitOptions } from '../providers/useAtlasClient';

export type GetPlaceDetails = () => Promise<V2Place>;

export interface AtlasAddressInputProps
  extends OmitPolyfill<AddressInputProps, 'options' | 'onSelect'>,
    AtlasInitOptions {
  debounceMs?: number;
  debounceFn?: (callback: Function, debounceMs: number) => Function;
  optionLayout?: 'single-line' | 'double-line';
  optionPrefix?: React.ReactNode;
  optionSuffix?: React.ReactNode;
  onSelect?: (
    option: DropdownLayoutValueOption,
    getPlaceDetails: GetPlaceDetails,
  ) => void;
}

declare const AtlasAddressInput: React.FC<AtlasAddressInputProps>;
export default AtlasAddressInput;
