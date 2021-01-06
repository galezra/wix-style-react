export const playground = `
<ThemeProvider theme={theme()}>
<Layout>
  <Cell>
    <Checkbox> Unchecked</Checkbox>
  </Cell>
  <Cell>
    <Checkbox checked> Checked</Checkbox>
  </Cell>
  <Cell>
    <Checkbox hasError tooltipContent="Oops!">
      Error
    </Checkbox>
  </Cell>
  <Cell>
    <Checkbox disabled>Disabled</Checkbox>
  </Cell>
</Layout>
</ThemeProvider>
`;
