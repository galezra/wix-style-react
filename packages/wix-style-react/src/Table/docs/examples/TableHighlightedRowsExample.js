/* eslint-disable */

class TableHighlightedRowsExample extends React.Component {
  state = {
    data: [
      { firstName: 'Meghan', lastName: 'Bishop' },
      { firstName: 'Sara', lastName: 'Porter' },
      { firstName: 'Deborah', lastName: 'Rhodes' },
      { firstName: 'Walter', lastName: 'Jenning' },
    ],
  };

  render() {
    return (
      <Table
        data={this.state.data}
        columns={[
          { title: 'First', render: row => row.firstName },
          { title: 'Last', render: row => row.lastName },
        ]}
        isRowHighlight={(rowData, rowNum) => rowNum % 2 === 0}
      >
        <Table.Content />
      </Table>
    );
  }
}
