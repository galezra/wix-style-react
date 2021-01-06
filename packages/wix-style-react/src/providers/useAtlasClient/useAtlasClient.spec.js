import { renderHook } from '@testing-library/react-hooks';
import { AmbassadorTestkit } from '@wix/ambassador-testkit';
import { WixAtlasServiceWeb } from '@wix/ambassador-wix-atlas-service-web/http';
import {
  aPredictResponse,
  aV2GetPlaceResponse,
  aV2Place as aPlace,
  aV2Prediction as aPrediction,
} from '@wix/ambassador-wix-atlas-service-web/builders';
import useAtlasClient, { BASE_ATLAS_URL } from './useAtlasClient';

describe('useAtlasClient', () => {
  const ambassadorTestkit = new AmbassadorTestkit();
  ambassadorTestkit.beforeAndAfter();
  const renderHelper = () => renderHook(() => useAtlasClient()).result;
  it('fetches autocomplete predictions from Atlas location service', async () => {
    const predictions = [aPrediction().build()];
    const response = aPredictResponse().withPredictions(predictions).build();
    const atlasStub = ambassadorTestkit.createStub(
      WixAtlasServiceWeb,
      BASE_ATLAS_URL,
    );
    atlasStub
      .AutocompleteServiceV2()
      .predict.when({ input: 'Paris' })
      .resolve(response);

    const result = renderHelper();
    const res = await result.current.fetchPredictions('Paris');
    expect(res).toEqual(predictions);
  });
  it('fetches place details from Atlas location service', async () => {
    const place = aPlace().build();
    const response = aV2GetPlaceResponse().withPlace(place).build();
    const atlasStub = ambassadorTestkit.createStub(
      WixAtlasServiceWeb,
      BASE_ATLAS_URL,
    );
    atlasStub.PlacesServiceV2().getPlace.always().resolve(response);

    const result = renderHelper();
    const res = await result.current.getPlaceDetails('12345');
    expect(res).toEqual(place);
  });
});
