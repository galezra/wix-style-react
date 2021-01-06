export const playground = `
<ThemeProvider theme={theme()}>
<Layout>
  <Cell>
    <Checkbox size="small"> Unchecked</Checkbox>
  </Cell>
  <Cell>
    <Checkbox checked size="small"> Checked</Checkbox>
  </Cell>
  <Cell>
    <Checkbox checked size="small" disabled>
      Checked Disabled lll
    </Checkbox>
  </Cell>
  <Cell>
    <Checkbox size="small" disabled>Disabled</Checkbox>
  </Cell>
</Layout>
</ThemeProvider>
`;
