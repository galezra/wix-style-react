/* eslint-disable */

class TableSkinNeutralExample extends React.Component {
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
        skin="neutral"
        columns={[
          { title: 'First', render: row => row.firstName },
          { title: 'Last', render: row => row.lastName },
        ]}
      >
        <Table.Content />
      </Table>
    );
  }
}
