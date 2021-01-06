import {
  V2Prediction as Prediction,
  V2Place as PlaceDetails,
  PredictRequest,
} from '@wix/ambassador-wix-atlas-service-web/types';
import { OmitPolyfill } from '../../common';
import {
  AutocompleteClient,
  UseAutocompleteClient,
} from '../usePlacesAutocomplete/autocompleteClient';

export type AtlasRequestOptions = OmitPolyfill<PredictRequest, 'input'>;
export interface AtlasInitOptions {
  baseUrl?: string;
  headers?: {
    [headerName: string]: any;
  };
}
export { Prediction, PlaceDetails };

export type AtlasClient = AutocompleteClient<
  Prediction,
  PlaceDetails,
  AtlasRequestOptions
>;

declare const useAtlasClient: UseAutocompleteClient<
  AtlasClient,
  AtlasInitOptions
>;

export default useAtlasClient;
