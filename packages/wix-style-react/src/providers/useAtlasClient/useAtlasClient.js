import { useCallback, useMemo } from 'react';
import { WixAtlasServiceWeb } from '@wix/ambassador-wix-atlas-service-web/http';

export const BASE_ATLAS_URL = 'https://www.wix.com/wix-atlas-service-web';

// Client for fetching autocomplete predictions from Atlas
const useAtlasClient = ({
  /** Custom domain to retreive predictions from  */
  baseUrl = BASE_ATLAS_URL,

  /** Headers to pass to Atlas Autocomplete Service */
  headers,
} = {}) => {
  const atlas = useMemo(() => WixAtlasServiceWeb(baseUrl), [baseUrl]);
  // Atlas Ambassador autocomplete service (memoized)
  const autocompleteService = useMemo(
    () => atlas.AutocompleteServiceV2()(headers),
    [atlas, headers],
  );
  // Atlas Ambassador places service (memoized)
  const placesService = useMemo(() => atlas.PlacesServiceV2()(headers), [
    atlas,
    headers,
  ]);

  const fetchPredictions = useCallback(
    async (value, requestOptions) => {
      // fetch autocomplete predictions based on value
      const { predictions } = await autocompleteService.predict({
        ...requestOptions,
        input: value,
      });

      return predictions;
    },
    [autocompleteService],
  );

  const getPlaceDetails = useCallback(
    async searchId => {
      const { place } = await placesService.getPlace({ searchId });
      return place;
    },
    [placesService],
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
   * }
   * @returns {Promise<Prediction[]>} */
    fetchPredictions,
    /** callback that fetches details for a place given its atlas `searchId`
     * @param {string} searchId identifier for atlas prediction result we want to get additional details for
     * @returns {Promise<V2Place>} */
    getPlaceDetails,
    /** whether component is ready */
    ready: true,
  };
};

export default useAtlasClient;
