import { AutocompleteClient } from './autocompleteClient';

export type UpdatePredictions<RequestOptions> = (
  value: string,
  requestOptions?: RequestOptions,
) => void;

export interface UsePlacesAutocompleteReturn<Prediction, RequestOptions> {
  predictions: Prediction[];
  loading: boolean;
  updatePredictions: UpdatePredictions<RequestOptions>;
  clearPredictions: () => void;
}
export interface UsePlacesAutocompleteProps<Prediction, RequestOptions> {
  client: AutocompleteClient<Prediction, RequestOptions>;
  debounceMs?: number;
  debounceFn?: (callback: Function, debounceMs: number) => Function;
}

declare const usePlacesAutocomplete: <Prediction, RequestOptions>(
  props?: UsePlacesAutocompleteProps<Prediction, RequestOptions>,
) => UsePlacesAutocompleteReturn<Prediction, RequestOptions>;

export default usePlacesAutocomplete;
