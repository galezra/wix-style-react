/* eslint-disable */

class TableStickyScrollExample extends React.Component {
  rowCount = 4;
  columnCount = 20;
  range = max => Array.from(Array(max).keys()).map(i => i + 1);
  data = this.range(this.rowCount).map(rowIndex =>
    this.range(this.columnCount).reduce(
      (rows, columnIndex) => ({
        ...rows,
        [`value${columnIndex}`]: `Value ${columnIndex}-${rowIndex}`,
      }),
      {},
    ),
  );

  columns = this.range(this.columnCount)
    .map(columnIndex => ({
      title: `Column ${columnIndex}`,
      render: row => row[`value${columnIndex}`],
      width: 150,
    }))
    .concat({
      title: '',
      width: 150,
      stickyActionCell: true,
      render: () => (
        <TableActionCell
          primaryAction={{ text: 'Edit', onClick: () => null }}
          popoverMenuProps={{ placement: 'top-end' ,
            triggerElement:({ toggle, open, close }) => (
              <IconButton
                onClick={toggle}
                onMouseLeave={close}
                skin="inverted"
              >
                <Icons.More />
              </IconButton>
            )}
          }
          secondaryActions={[
            {
              icon: <Icons.Star />,
              onClick: () => null,
              text: 'Star',
            },
          ]}
        />
      ),
    });

  render() {
    return (
      <Table
        horizontalScroll
        stickyColumns={2}
        onRowClick={() => null}
        showSelection
        data={this.data}
        columns={this.columns}
      >
        <Table.Content />
      </Table>
    );
  }
}
