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

const WixAtlasServiceWeb = () => ({
  AutocompleteServiceV2: () => () => ({
    predict: ({ input }) =>
      Promise.resolve(buildAtlasAutocompleteResponse(input)),
  }),
  PlacesServiceV2: () => () => ({
    getPlace: ({ searchId }) =>
      Promise.resolve(buildAtlasPlaceResponse(searchId)),
  }),
});

module.exports.WixAtlasServiceWeb = WixAtlasServiceWeb;
