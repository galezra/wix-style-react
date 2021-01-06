/* eslint-disable */

class TableRowDetailsExample extends React.Component {
  state = {
    data: [
      { firstName: 'Meghan', lastName: 'Bishop', expandable: true },
      { firstName: 'Sara', lastName: 'Porter', expandable: false },
      { firstName: 'Deborah', lastName: 'Rhodes', expandable: true },
      { firstName: 'Walter', lastName: 'Jenning', expandable: true },
    ],
  };

  renderRowDetails(row) {
    if(row.expandable) {
      return (
        <Box padding="20px">
          <Text>
            {`This is an expandible space where you see the row details for ${row.firstName} ${row.lastName}.`}
          </Text>
        </Box>
      );
    }
  }

  render() {
    return (
      <Table
        data={this.state.data}
        columns={[
          { title: 'First', render: row => row.firstName },
          { title: 'Last', render: row => row.lastName },
          {
            title: 'expandable',
            render: row =>
              row.expandable ? (
                <Badge size="small">Expandable</Badge>
              ) : (
                <Badge size="small" skin="danger">
                  Not Expandable
                </Badge>
              ),
          },
        ]}
        rowDetails={row => this.renderRowDetails(row)}
      >
        <Table.Content />
      </Table>
    );
  }
}
