export const playground = `
<ThemeProvider theme={theme()}>
<Layout>
  <Cell>
    <Checkbox selectionArea="hover" size="small">Unchecked With Selesction Area</Checkbox>
  </Cell>
  <Cell>
    <Checkbox selectionArea="hover" checked size="small">Checked With Selesction Area</Checkbox>
  </Cell>
  <Cell>
    <Checkbox selectionArea="hover" checked size="small" disabled>
      Checked Disabled With Selesction Area
    </Checkbox>
  </Cell>
  <Cell>
    <Checkbox size="small" selectionArea="hover" disabled>Disabled With Selesction Area</Checkbox>
  </Cell>
  <Cell>
  <Checkbox size="small">Unchecked</Checkbox>
</Cell>
<Cell>
  <Checkbox checked size="small">Checked</Checkbox>
</Cell>
<Cell>
  <Checkbox checked size="small" disabled>
    Checked Disabled
  </Checkbox>
</Cell>
<Cell>
  <Checkbox size="small" disabled>Disabled</Checkbox>
</Cell>
</Layout>
</ThemeProvider>
`;
