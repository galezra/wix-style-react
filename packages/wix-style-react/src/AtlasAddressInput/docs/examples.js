export const simple = `<AtlasAddressInput headers={{ Authorization: 'some_auth_token' }} />`;

export const controlled = `
() => {
  const [value, setValue] = React.useState('');

  const _onChange = event => setValue(event.target.value);

  const _onClear = () => setValue('');

  // Show address postal code
  const _onSelect = (option, getPlaceDetails) => {
    getPlaceDetails().then(placeDetails => {
      setValue(\`\${option.label} - \${placeDetails.address.postalCode}\`);
    });
  }

  return (
    <AtlasAddressInput
      onChange={_onChange}
      onClear={_onClear}
      onSelect={_onSelect}
      value={value}
      headers={{ Authorization: 'some_auth_token' }}
    />
  );
};
`;
