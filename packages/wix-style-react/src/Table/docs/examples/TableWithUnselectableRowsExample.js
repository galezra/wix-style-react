/* eslint-disable */

class TableWithUnselectableRowsExample extends React.Component {
  state = {
    data: [
      { type: 'Folder', name: 'In Progress', unselectable: true },
      { type: 'Folder', name: 'Premium', unselectable: true },
      { type: 'Site', name: 'My Blog' },
      { type: 'Site', name: 'My Events' },
      { type: 'Site', name: 'My Bookings' },
    ],
  };

  render() {
    return (
      <Card>
        <Table
          data={this.state.data}
          columns={[
            { title: 'Name', render: row => row.name },
            { title: 'Type', render: row => row.type },
          ]}
          showSelection
        />
      </Card>
    );
  }
}
