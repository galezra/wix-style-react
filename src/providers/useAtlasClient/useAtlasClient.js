import { useCallback, useMemo } from 'react';
import { WixAtlasServiceWeb } from '@wix/ambassador-wix-atlas-service-web/http';

export const BASE_ATLAS_URL = 'https://www.wix.com/wix-atlas-service-web';

// Client for fetching autocomplete predictions from Atlas
const useAtlasClient = ({
  /** Custom domain to retreive predictions from  */
  baseUrl = BASE_ATLAS_URL,
} = {}) => {
  // Atlas Ambassador autocomplete service (memoized)
  const autocompleteService = useMemo(
    () => WixAtlasServiceWeb(baseUrl).AutocompleteServiceV2(),
    [baseUrl],
  );

  const fetchPredictions = useCallback(
    async (value, requestOptions) => {
      // fetch autocomplete predictions based on value
      const { predictions } = await autocompleteService().listPredictions({
        ...requestOptions,
        input: value,
      });

      return predictions;
    },
    [autocompleteService],
  );

  return {
    /** callback that fetches predictions from Atlas
   * @param {string} value Input text we want predictions for.
   * @param {AtlasRequestOptions} requestOptions (optional) Options to customize predictions: {
      *  @property { filterType: "zip_code" | "country_code", filterValue: string } filterBy
              (optional) filter results by country or zip code;
      *  @property {latitude: number, longitude: number} location
              (optional) the point around which you wish to retrieve place information;
      *  @property {latitude: number, longitude: number} origin
              (optional) the origin point from which to calculate straight-line distance to the destination;
      *  @property {number} radius (optional) the distance (in meters) within which to return place results;
   * } */
    fetchPredictions,
    /** whether component is ready */
    ready: true,
  };
};

export default useAtlasClient;
