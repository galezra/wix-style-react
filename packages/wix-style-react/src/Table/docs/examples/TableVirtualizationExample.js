/* eslint-disable */

class TableVirtualizationExample extends React.Component {
  baseData = [
    { firstName: 'Meghan', lastName: 'Bishop' },
    { firstName: 'Sara', lastName: 'Porter' },
    { firstName: 'Deborah', lastName: 'Rhodes' },
    { firstName: 'Walter', lastName: 'Jenning' },
  ];

  state = {
    count: 1000,
  };

  render() {
    const { count } = this.state;

    return (
      <Table
        data={this._generateData(count)}
        columns={[
          { title: 'First', width: '50%', render: row => row.firstName },
          { title: 'Last', width: '50%', render: row => row.lastName },
        ]}
        virtualized
        // The height of each item
        virtualizedLineHeight={60}
        // The height of the whole table
        virtualizedTableHeight={258}
      >
        <Table.Content titleBarVisible={false} />
      </Table>
    );
  }

  _generateData = count => {
    let data = [];

    for (let i = 0; i < count; i++) {
      data = data.concat(this.baseData);
    }

    return data;
  };
}
