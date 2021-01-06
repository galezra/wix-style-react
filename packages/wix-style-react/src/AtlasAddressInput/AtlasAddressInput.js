import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import AddressInput from '../AddressInput';
import { addressInputItemBuilder } from '../AddressInputItem';
import usePlacesAutocomplete from '../providers/usePlacesAutocomplete';
import useAtlasClient from '../providers/useAtlasClient';
import { dataHooks } from './constants';

const AtlasAddressInput = ({
  baseUrl,
  headers,
  debounceMs,
  debounceFn,
  onChange,
  onClear,
  onSelect,
  optionLayout,
  optionPrefix,
  optionSuffix,
  status: statusProp,
  ...props
}) => {
  const client = useAtlasClient({ baseUrl, headers });
  const {
    predictions,
    updatePredictions,
    clearPredictions,
    loading,
  } = usePlacesAutocomplete({ client, debounceMs, debounceFn });

  // If not loading, show the status passed from props
  const status = loading ? 'loading' : statusProp;

  const options = useMemo(
    () =>
      predictions.map(prediction =>
        addressInputItemBuilder({
          id: prediction.searchId,
          mainLabel: prediction.textStructure.mainText,
          secondaryLabel: prediction.textStructure.secondaryText,
          displayLabel: prediction.description,
          optionLayout,
          prefix: optionPrefix,
          suffix: optionSuffix,
          dataHook: dataHooks.item,
        }),
      ),
    [predictions, optionLayout, optionPrefix, optionSuffix],
  );

  const _onChange = useCallback(
    event => {
      updatePredictions(event.target.value);
      onChange && onChange(event);
    },
    [updatePredictions, onChange],
  );

  const _onClear = useCallback(() => {
    clearPredictions();
    onClear && onClear();
  }, [clearPredictions, onClear]);

  const _onSelect = useCallback(
    option => {
      const getPlaceDetails = () => client.getPlaceDetails(option.id);
      onSelect && onSelect(option, getPlaceDetails);
    },
    [client, onSelect],
  );

  return (
    <AddressInput
      {...props}
      options={options}
      onChange={_onChange}
      onClear={_onClear}
      onSelect={_onSelect}
      status={status}
    />
  );
};

AtlasAddressInput.propTypes = {
  /** Custom domain for WixAtlasServiceWeb to retreive predictions from  */
  baseUrl: PropTypes.string,

  /** Headers to pass to Atlas Autocomplete Service */
  headers: PropTypes.object,

  /** Fetch predictions debounce in milliseconds (default: 200) */
  debounceMs: PropTypes.number,

  /** (callback: Function, debounceMs: number) => Function
   * allow passing a custom debounce function (default: lodash debounce) */
  debounceFn: PropTypes.func,

  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Displays clear button (X) on a non-empty input */
  clearButton: PropTypes.bool,

  /** The initial input value */
  initialValue: PropTypes.string,

  /** Controlled mode - value to display */
  value: PropTypes.string,

  /** When set to true this component is disabled */
  disabled: PropTypes.bool,

  /** Handler for address selection changes
   * @param {DropdownLayoutOption} option selected option
   * @param {() => Promise<V2GetPlaceResponse>} getPlaceDetails function for retrieving additional place details
   */
  onSelect: PropTypes.func,

  /** Handler for input changes */
  onChange: PropTypes.func,

  /** Handler for getting notified upon a clear event, will show the clear button in the component input when passed. */
  onClear: PropTypes.func,

  /** Handler for input blur */
  onBlur: PropTypes.func,

  /** Shows a status indication, will mostly be used for “loading” indication upon async request calls. */
  status: PropTypes.oneOf(['loading', 'error', 'warning']),

  /** The status message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: PropTypes.node,

  /** The shape of the component input */
  roundInput: PropTypes.bool,

  /** Specifies the size of the input */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Placeholder to display */
  placeholder: PropTypes.string,

  /** Text to show in dropdown when no results found */
  noResultsText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Option: Sets the layout of `mainLabel` and `secondaryLabel`. The possible options can be either side by side: `single-line` or double lined: `double-line`*/
  optionLayout: PropTypes.oneOf(['single-line', 'double-line']),

  /** Will show the provided node as the option prefix. */
  optionPrefix: PropTypes.node,

  /**  Will show the provided node as the option suffix. */
  optionSuffix: PropTypes.node,
};

export default AtlasAddressInput;
