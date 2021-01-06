/* eslint-disable */

class TableBulkSelectionCheckboxExample extends React.Component {
  state = {
    data: [
      { elementName: 'Hydrogen', atomicWeight: 1.008 },
      { elementName: 'Helium', atomicWeight: 4.003 },
      { elementName: 'Lithium', atomicWeight: 6.941 },
      { elementName: 'Beryllium', atomicWeight: 9.012 },
    ],
  };

  getCheckboxContent(selectedCount, bulkSelectionState) {
    switch (bulkSelectionState) {
      case 'ALL':
        return `All Elements Selected`;
      case 'NONE':
        return 'Select All Elements';
      case 'SOME':
        return selectedCount === 1 ? '1 Element Selected' : `${selectedCount} Elements Selected`;
    }
  }

  render() {
    return (
      <Card>
        <Table
          data={this.state.data}
          columns={[
            { title: 'Element Name', render: row => row.elementName },
            { title: 'Atomic Weight', render: row => row.atomicWeight },
          ]}
          showSelection
          hideBulkSelectionCheckbox
        >
          <Table.ToolbarContainer>
            {({ selectedCount, bulkSelectionState }) =>
              <TableToolbar>
                <TableToolbar.ItemGroup position="start">
                  <TableToolbar.Item>
                    <Table.BulkSelectionCheckbox>
                      <TableToolbar.SelectedCount>
                        {this.getCheckboxContent(selectedCount, bulkSelectionState)}
                      </TableToolbar.SelectedCount>
                    </Table.BulkSelectionCheckbox>
                  </TableToolbar.Item>
                </TableToolbar.ItemGroup>
              </TableToolbar>
            }
          </Table.ToolbarContainer>
          <Table.Content />
        </Table>
      </Card>
    );
  }
}
