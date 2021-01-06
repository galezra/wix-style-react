export type FetchPredictions<Prediction, RequestOptions = any> = (
  value: string,
  requestOptions?: RequestOptions,
) => Promise<Prediction[]>;

export type GetPlaceDetails<PlaceDetails> = (
  placeId: string,
) => Promise<PlaceDetails>;

interface ReadyAutocompleteClient<
  Prediction,
  PlaceDetails,
  RequestOptions = any
> {
  fetchPredictions: FetchPredictions<Prediction, RequestOptions>;
  getPlaceDetails: GetPlaceDetails<PlaceDetails>;
  ready: true;
}

interface NotReadyAutocompleteClient {
  ready: false;
}

export type AutocompleteClient<
  Prediction,
  PlaceDetails,
  RequestOptions = any
> =
  | ReadyAutocompleteClient<Prediction, PlaceDetails, RequestOptions>
  | NotReadyAutocompleteClient;

export type UseAutocompleteClient<
  Client extends AutocompleteClient<any, any, any>,
  InitOptions = any
> = (options?: InitOptions) => Client;
