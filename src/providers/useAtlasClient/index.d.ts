import {
  V2Prediction as Prediction,
  ListPredictionsRequest,
} from '@wix/ambassador-wix-atlas-service-web/types';
import { OmitPolyfill } from '../../common';
import {
  AutocompleteClient,
  UseAutocompleteClient,
} from '../usePlacesAutocomplete/autocompleteClient';

export type AtlasRequestOptions = OmitPolyfill<ListPredictionsRequest, 'input'>;
export interface AtlasInitOptions {
  baseUrl?: string;
}
export { Prediction };

export type AtlasClient = AutocompleteClient<Prediction, AtlasRequestOptions>;

declare const useAtlasClient: UseAutocompleteClient<
  AtlasClient,
  AtlasInitOptions
>;

export default useAtlasClient;
