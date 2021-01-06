/* eslint-disable */

class TableEmptyStateExample extends React.Component {
  render() {
    return (
      <Card>
        <Table>
          <TableToolbar>
            <TableToolbar.ItemGroup>
              <TableToolbar.Item>
                <TableToolbar.Title>My Table</TableToolbar.Title>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
          <Table.EmptyState
            title="You haven't added any items yet"
            subtitle="Add items to your website so people can buy them"
            image={<Box height={120} width={120} backgroundColor="#dfe5eb" borderRadius="50%" />}
          >
            <TextButton suffixIcon={<Icons.ExternalLink />}>Learn how to add items</TextButton>
          </Table.EmptyState>
        </Table>
      </Card>
    );
  }
}
