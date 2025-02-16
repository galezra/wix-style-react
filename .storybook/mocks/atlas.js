const {
  aPredictResponse,
  aV2Prediction: aPrediction,
  aV2GetPlaceResponse,
  aV2Place: aPlace,
  aCommonAddress,
} = require('@wix/ambassador-wix-atlas-service-web/builders');

const buildAtlasAutocompleteResponse = input => {
  if (!input) {
    return aPredictResponse().withPredictions([]).build();
  }
  const predictions = Array.from({ length: 5 }, (_, index) => {
    const mainText = `${input} ${index + 1}`;
    const secondaryText = 'Country';
    const description = `${mainText}, ${secondaryText}`;
    return aPrediction()
      .withSearchId(`${index}`)
      .withDescription(description)
      .withTextStructure({
        mainText,
        secondaryText,
      })
      .build();
  });

  const response = aPredictResponse().withPredictions(predictions).build();

  return response;
};

const buildAtlasPlaceResponse = id => {
  const address = aCommonAddress().withPostalCode(`0651${id}`).build();
  const place = aPlace().withPlaceId(id).withAddress(address).build();
  const response = aV2GetPlaceResponse().withPlace(place).build();
  return response;
};

const mockAtlasRouter = function (router, baseRoute) {
  router.post(`${baseRoute}/v2/predict`, function (req, res) {
    const {
      body: { input },
    } = req;
    res.json(buildAtlasAutocompleteResponse(input));
    res.end();
  });
  router.get(`${baseRoute}/v2/place`, function (req, res) {
    const {
      query: { searchId },
    } = req;
    res.json(buildAtlasPlaceResponse(searchId));
    res.end();
  });
};

module.exports = mockAtlasRouter;
